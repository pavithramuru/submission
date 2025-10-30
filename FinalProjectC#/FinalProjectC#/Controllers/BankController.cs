using FinalProjectC_.Data;
using FinalProjectC_.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FinalProjectC_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BankController : ControllerBase
    {
        private readonly AppDbContext _context;
        public BankController(AppDbContext context) => _context = context;

        [HttpGet]
        public async Task<IActionResult> GetBanks() =>
            Ok(await _context.Banks.Include(b => b.Branches).ToListAsync());

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateBank(Bank bank)
        {
            _context.Banks.Add(bank);
            await _context.SaveChangesAsync();
            return Ok(bank);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateBank(int id, Bank updated)
        {
            var bank = await _context.Banks.FindAsync(id);
            if (bank == null) return NotFound();

            bank.BankName = updated.BankName;
            await _context.SaveChangesAsync();
            return Ok(bank);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteBank(int id)
        {
            var bank = await _context.Banks.FindAsync(id);
            if (bank == null) return NotFound();

            _context.Banks.Remove(bank);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
