using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Entities
{
    public class BandHQ
    {
        [Required, Key]
        public int BandId { get; set; }

        [Required]
        public string Country { get; set; } = null!;
        [Required]
        public string City { get; set; } = null!;
        public string? Street { get; set; }
        public int? SquareMeters { get; set; }

        public virtual MusicalBand Band { get; set; } = null!;
    }
}
