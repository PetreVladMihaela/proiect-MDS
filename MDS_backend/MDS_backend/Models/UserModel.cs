using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Models
{
    public class UserModel
    {
        [Required, Key]
        public string Email { get; set; } = null!;

        [Required, StringLength(20, MinimumLength = 5)]
        public string Password { get; set; } = null!;

        [Required, StringLength(50, MinimumLength = 1)]
        public string Username { get; set; } = null!;
    }
}
