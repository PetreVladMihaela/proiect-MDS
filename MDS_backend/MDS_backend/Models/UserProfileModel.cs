using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Models
{
    public class UserProfileModel
    {
        [Required, Key]
        public string Email { get; set; } = null!;

        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int? Age { get; set; }

        public bool? IsMusician { get; set; }
        public bool? CanSing { get; set; }
        public string? PlayedInstrument { get; set; }
        public string? PreferredMusicGenre { get; set; }

        public int? BandId { get; set; }
    }
}
