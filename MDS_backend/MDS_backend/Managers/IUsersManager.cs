using MDS_backend.Entities;
using MDS_backend.Models;

namespace MDS_backend.Managers
{
    public interface IUsersManager
    {
        List<User> GetAllUsers();
        List<User> GetAllUsersWithProfile();
        User GetUserById(int id);
        User? GetUserByEmail(string email);
        User? GetUserByUsername(string username);

        void Create(UserModel model);
        void Update(UserModel model);
        void Delete(string email);

    }
}
