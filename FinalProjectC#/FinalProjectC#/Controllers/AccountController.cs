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
    public class AccountController : ControllerBase
    {
        private readonly AppDbContext _context;
        public AccountController(AppDbContext context) => _context = context;

        [HttpGet]
        public async Task<IActionResult> GetAccounts() =>
            Ok(await _context.Accounts.Include(a => a.User).Include(a => a.Branch).ToListAsync());

        [HttpPost]
        public async Task<IActionResult> CreateAccount(Account account)
        {
            account.AccountNumber = Guid.NewGuid().ToString("N")[..10];
            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();
            return Ok(account);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAccount(int id, Account updated)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null) return NotFound();

            account.Balance = updated.Balance;
            account.IsClosed = updated.IsClosed;
            await _context.SaveChangesAsync();
            return Ok(account);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccount(int id)
        {
            var account = await _context.Accounts.FindAsync(id);
            if (account == null) return NotFound();

            _context.Accounts.Remove(account);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
