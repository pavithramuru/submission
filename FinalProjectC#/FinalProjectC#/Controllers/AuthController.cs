using Microsoft.AspNetCore.Mvc;
using FinalProjectC_.Models;
using FinalProjectC_.Data;
using FinalProjectC_.Auth;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System;

namespace FinalProjectC_.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtService _jwtService;

        public AuthController(AppDbContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        // Register new user
        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            if (await _context.Users.AnyAsync(u => u.Username == user.Username))
                return BadRequest("Username already exists");

            user.Password = HashPassword(user.Password);
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User registered successfully");
        }

        // Login endpoint
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _context.Users
                .Include(u => u.Role)
                .FirstOrDefaultAsync(u => u.Username == request.Username);

            if (user == null || !VerifyPassword(request.Password, user.Password))
                return Unauthorized("Invalid credentials");

            var token = _jwtService.GenerateToken(user);
            return Ok(new LoginResponse
            {
                Token = token,
                Username = user.Username,
                Role = user.Role?.Name ?? "User"
            });
        }

        // Helpers for hashing
        private static string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(bytes);
        }

        private static bool VerifyPassword(string password, string hash)
        {
            var hashedInput = HashPassword(password);
            return hashedInput == hash;
        }
    }
}
