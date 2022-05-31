using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Entities
{
    public class UserAddress
    {
        [Required, Key]
        public int UserId { get; set; }
        public virtual UserProfile Profile { get; set; } = null!;

        public string? Country { get; set; }
        public string? City { get; set; }
        public string? Street { get; set; }
    }
}
