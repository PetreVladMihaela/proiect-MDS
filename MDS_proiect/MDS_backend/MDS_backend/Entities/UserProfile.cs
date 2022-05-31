using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Entities
{
    public class UserProfile
    {
        [Required, Key]
        public int UserId { get; set; }
        public virtual User Owner { get; set; } = null!;

        [StringLength(20, MinimumLength = 10)]
        public string? Phone { get; set; } = null!;

        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int? Age { get; set; }
        public string? Occupation { get; set; }

        public string? Trait1 { get; set; }
        public string? Trait2 { get; set; }
        public bool? CanSing { get; set; }
        //public List<string>? PlayedInstruments { get; set; }
        public string? PlayedInstrument { get; set; }
        public string? PreferredMusicGenre { get; set; }

        public virtual UserAddress? Address { get; set; }

        public int? BandId { get; set; }
        public virtual MusicalBand? Band { get; set; }
    }
}
