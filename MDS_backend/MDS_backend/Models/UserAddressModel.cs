namespace MDS_backend.Models
{
    public class UserAddressModel
    {
        public int UserId { get; set; }
        public string? Country { get; set; }
        public string? City { get; set; }
        public string? Street { get; set; }
    }
}
