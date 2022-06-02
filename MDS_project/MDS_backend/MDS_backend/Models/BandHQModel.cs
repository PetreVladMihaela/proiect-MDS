namespace MDS_backend.Models
{
    public class BandHQModel
    {
        public int BandId { get; set; }
        public string Country { get; set; } = null!;
        public string City { get; set; } = null!;
        public string? Address { get; set; }
        public int? SquareMeters { get; set; }
    }
}
