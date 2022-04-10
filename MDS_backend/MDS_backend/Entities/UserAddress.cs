using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Entities
{
    public class UserAddress
    {
        [Required, Key]
        public string Email { get; set; } = null!;
        public virtual UserProfile Profile { get; set; } = null!;

        public string Country { get; set; } = null!;
        public string City { get; set; } = null!;
        public string? Street { get; set; }
    }
}
