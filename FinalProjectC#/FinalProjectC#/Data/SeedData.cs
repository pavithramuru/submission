using FinalProjectC_.Models;
using System.Security.Cryptography;
using System.Text;

namespace FinalProjectC_.Data
{
    public static class SeedData
    {
        public static void Initialize(AppDbContext context)
        {
            if (!context.Roles.Any())
            {
                var adminRole = new Role { RoleName = "Admin" };
                var userRole = new Role { RoleName = "User" };
                context.Roles.AddRange(adminRole, userRole);
                context.SaveChanges();
            }

            if (!context.Users.Any())
            {
                var passwordHash = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes("Admin@123")));
                var adminRole = context.Roles.First(r => r.RoleName == "Admin");

                var admin = new User
                {
                    Username = "admin",
                    Email = "admin@example.com",
                    PasswordHash = passwordHash,
                    Roles = new List<Role> { adminRole }
                };

                context.Users.Add(admin);
                context.SaveChanges();
            }

            if (!context.Banks.Any())
            {
                var bank = new Bank { BankName = "Sample Bank" };
                context.Banks.Add(bank);
                context.SaveChanges();
            }
        }
    }
}
