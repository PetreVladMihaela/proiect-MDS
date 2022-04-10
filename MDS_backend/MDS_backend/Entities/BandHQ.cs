using System.ComponentModel.DataAnnotations;

namespace MDS_backend.Entities
{
    public class BandHQ
    {
        [Key]
        public int Id { get; set; }
        public string Country { get; set; } = null!;
        public string City { get; set; } = null!;
        public string? Street { get; set; }
        public int? SquareMeters { get; set; }

        public int BandId { get; set; }
        public virtual MusicalBand Band { get; set; } = null!;
    }
}
