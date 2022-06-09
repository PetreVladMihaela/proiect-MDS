namespace MDS_backend.Entities
{
    public class BandAndUserMatch
    {
        public int BandId { get; set; }
        public int UserId { get; set; }
        public string? Type { get; set; }

        public virtual MusicalBand MusicalBand { get; set; } = null!;
        public virtual UserProfile UserProfile { get; set; } = null!;
    }
}
