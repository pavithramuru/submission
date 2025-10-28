using Microsoft.EntityFrameworkCore;
using FinalProjectC_.Models;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace FinalProjectC_.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        // DbSets
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Permission> Permissions { get; set; }
        public DbSet<Bank> Banks { get; set; }
        public DbSet<Branch> Branches { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<SavingsAccount> SavingsAccounts { get; set; }
        public DbSet<CurrentAccount> CurrentAccounts { get; set; }
        public DbSet<TermDeposit> TermDeposits { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // ✅ Set default schema
            modelBuilder.HasDefaultSchema("training");

            // ✅ Configure relationships and inheritance
            modelBuilder.Entity<Account>()
                .HasDiscriminator<string>("AccountType")
                .HasValue<SavingsAccount>("Savings")
                .HasValue<CurrentAccount>("Current")
                .HasValue<TermDeposit>("TermDeposit");

            // Optional: Relationships
            modelBuilder.Entity<User>()
                .HasMany(u => u.Accounts)
                .WithOne(a => a.User)
                .HasForeignKey(a => a.UserId);

            modelBuilder.Entity<User>()
                .HasMany(u => u.Roles)
                .WithMany(r => r.Users)
                .UsingEntity(j => j.ToTable("UserRoles"));

            base.OnModelCreating(modelBuilder);
        }
    }
}
