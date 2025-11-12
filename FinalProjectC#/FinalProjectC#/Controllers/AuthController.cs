using FinalProjectC_.Data;
using FinalProjectC_.Models.DTOs;
using FinalProjectC_.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace FinalProjectC_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IJwtService _jwtService;

        public AuthController(AppDbContext context, IJwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto request)
        {
            if (string.IsNullOrWhiteSpace(request.UsernameOrEmail) || string.IsNullOrWhiteSpace(request.Password))
                return BadRequest("Username/Email and password are required.");

            var user = await _context.Users
                .Include(u => u.Roles)
                .FirstOrDefaultAsync(u =>
                    u.Username == request.UsernameOrEmail ||
                    u.Email == request.UsernameOrEmail);

            if (user == null)
                return Unauthorized("Invalid username/email or password.");

            // ✅ Use SHA256 hashing to match SeedData
            var hashedPassword = HashPasswordSHA256(request.Password);

            Console.WriteLine($"Entered Hash: {hashedPassword}");
            Console.WriteLine($"Stored Hash:  {user.PasswordHash}");

            if (hashedPassword != user.PasswordHash)
                return Unauthorized("Invalid credentials.");

            var token = _jwtService.GenerateToken(user);

            return Ok(new LoginResponseDto
            {
                Token = token,
                Username = user.Username,
                Email = user.Email
            });
        }

        private static string HashPasswordSHA256(string password)
        {
            using var sha = SHA256.Create();
            var bytes = Encoding.UTF8.GetBytes(password);
            var hash = sha.ComputeHash(bytes);
            return Convert.ToBase64String(hash);
        }
    }
}
