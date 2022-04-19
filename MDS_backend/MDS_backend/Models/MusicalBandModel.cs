using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Models
{
    public class MusicalBandModel
    {
        [Required, Key]
        public int BandId { get; set; }

        public string Name { get; set; } = null!;
        public string? MusicGenre { get; set; }
        public DateTime? DateFormed { get; set; }
        public bool? Complete { get; set; }
    }
}
