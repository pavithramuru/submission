using FinalProjectC_.Models;
using Microsoft.EntityFrameworkCore;

namespace FinalProjectC_.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Role> Roles => Set<Role>();
        public DbSet<Permission> Permissions => Set<Permission>();
        public DbSet<Bank> Banks => Set<Bank>();
        public DbSet<Branch> Branches => Set<Branch>();
        public DbSet<Account> Accounts => Set<Account>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Schema
            modelBuilder.HasDefaultSchema("training");

            // Unique constraints
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            modelBuilder.Entity<Account>()
                .HasIndex(a => a.AccountNumber)
                .IsUnique();

            // Many-to-Many: User <-> Role
            modelBuilder.Entity<User>()
                .HasMany(u => u.Roles)
                .WithMany(r => r.Users)
                .UsingEntity(
                    j => j.ToTable("RoleUser", "training") // maps to your DB table
                );

            // Many-to-Many: Role <-> Permission
            modelBuilder.Entity<Role>()
                .HasMany(r => r.Permissions)
                .WithMany(p => p.Roles)
                .UsingEntity(
                    j => j.ToTable("PermissionRole", "training") // maps to your DB table
                );

            // Bank -> Branch
            modelBuilder.Entity<Bank>()
                .HasMany(b => b.Branches)
                .WithOne(br => br.Bank)
                .HasForeignKey(br => br.BankId)
                .OnDelete(DeleteBehavior.Cascade);

            // Branch -> Account
            modelBuilder.Entity<Branch>()
                .HasMany(br => br.Accounts)
                .WithOne(a => a.Branch)
                .HasForeignKey(a => a.BranchId)
                .OnDelete(DeleteBehavior.Cascade);

            // User -> Account
            modelBuilder.Entity<User>()
                .HasMany(u => u.Accounts)
                .WithOne(a => a.User)
                .HasForeignKey(a => a.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
