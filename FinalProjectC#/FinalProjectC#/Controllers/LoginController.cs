using FinalProjectC_.Data;
using FinalProjectC_.Models;
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
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IJwtService _jwtService;
        private readonly ILogger<LoginController> _logger;

        public LoginController(AppDbContext context, IJwtService jwtService, ILogger<LoginController> logger)
        {
            _context = context;
            _jwtService = jwtService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.UsernameOrEmail) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest("Username/Email and Password are required.");
            }

            try
            {
                var user = await _context.Users
                    .Include(u => u.Roles)
                    .FirstOrDefaultAsync(u => u.Username == request.UsernameOrEmail || u.Email == request.UsernameOrEmail);

                if (user == null)
                {
                    return Unauthorized("Invalid credentials.");
                }

                string passwordHash;
                using (var sha1 = SHA1.Create())
                {
                    passwordHash = Convert.ToBase64String(
                        sha1.ComputeHash(Encoding.UTF8.GetBytes(request.Password))
                    );
                }

                if (user.PasswordHash != passwordHash)
                {
                    return Unauthorized("Invalid credentials.");
                }

                var token = _jwtService.GenerateToken(user);

                var response = new LoginResponseDto
                {
                    Token = token,
                    Username = user.Username,
                    Email = user.Email
                };

                return Ok(response);
            }
            catch
            {
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }
    }
}
