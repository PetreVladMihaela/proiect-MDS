namespace MDS_backend.Models
{
    public class UserProfileModel
    {
        public int UserId { get; set; }
        public UserModel Owner { get; set; } = null!;
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
        public UserAddressModel? Address;
    }
}
