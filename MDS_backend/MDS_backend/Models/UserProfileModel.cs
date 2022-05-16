using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Models
{
    public class UserProfileModel
    {
        [Required, Key]
        public string Email { get; set; } = null!;

        [StringLength(20, MinimumLength = 10)]
        public string? Phone { get; set; } = null!;

        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int? Age { get; set; }
        public string? Occupation { get; set; }

        public string? Trait1 { get; set; }
        public string? Trait2 { get; set; }

        public bool? CanSing { get; set; }
        public string? PlayedInstrument { get; set; }
        public string? PreferredMusicGenre { get; set; }

        public int? BandId { get; set; }
    }
}
