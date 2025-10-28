using FinalProjectC_.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FinalProjectC_.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Username { get; set; } = string.Empty;

        [Required]
        public string PasswordHash { get; set; } = string.Empty;

        [Required, EmailAddress, MaxLength(150)]
        public string Email { get; set; } = string.Empty;

        [Range(0, 120, ErrorMessage = "Age must be between 0 and 120")]
        public int Age { get; set; }

        // ✅ Computed Property - Eligibility Check
        public bool IsEligible => Age >= 18;

        // Navigation Properties
        public ICollection<Account>? Accounts { get; set; }
        public ICollection<Role>? Roles { get; set; }
    }
}
