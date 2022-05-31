namespace MDS_backend.Models
{
    public class UserModel
    {
        public int UserId { get; set; }
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Username { get; set; } = null!;
    }
}
