using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Entities
{
    public class MusicalBand
    {
        [Required, Key]
        public int BandId { get; set; }

        [Required]
        public string Name { get; set; } = null!;
        public string? MusicGenre { get; set; }
        public DateTime DateFormed { get; set; }
        public bool IsComplete { get; set; }

        public virtual BandHQ? HQ { get; set; }
        public virtual ICollection<UserProfile> Members { get; set; } = null!;

    }
}
