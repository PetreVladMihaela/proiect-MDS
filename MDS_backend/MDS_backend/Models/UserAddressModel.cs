using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Models
{
    public class UserAddressModel
    {
        [Required, Key]
        public string Email { get; set; } = null!;

        public string? Country { get; set; }
        public string? City { get; set; }
        public string? Street { get; set; }
    }
}
