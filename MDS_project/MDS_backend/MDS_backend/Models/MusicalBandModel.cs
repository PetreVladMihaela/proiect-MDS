namespace MDS_backend.Models
{
    public class MusicalBandModel
    {
        public int BandId { get; set; }
        public string Name { get; set; } = null!;
        public string? MusicGenre { get; set; }

        public DateTime DateFormed { get; set; }
        public bool IsComplete { get; set; }

        public BandHQModel? HQ;
    }
}
