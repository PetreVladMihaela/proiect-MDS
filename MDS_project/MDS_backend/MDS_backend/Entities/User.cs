using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace MDS_backend.Entities
{
    [Index(nameof(Email), IsUnique = true)]
    [Index(nameof(Username), IsUnique = true)]
    public class User
    {
        [Required, Key]
        public int UserId { get; set; }

        [Required]
        public string Email { get; set; } = null!;
        [Required, StringLength(20, MinimumLength = 5)]
        public string Password { get; set; } = null!;
        [Required, StringLength(50, MinimumLength = 1)]
        public string Username { get; set; } = null!; //must be unique

        //[Required]
        //public string Role { get; set; } = null!;

        public virtual UserProfile Profile { get; set; } = null!;
    }
}
