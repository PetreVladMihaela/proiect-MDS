using MDS_backend.Repositories;
using MDS_backend.Entities;
using MDS_backend.Models;


namespace MDS_backend.Managers
{
    public class UsersManager : IUsersManager
    {
        private readonly IUsersRepository usersRepository;

        public UsersManager(IUsersRepository usersRepository)
        {
            this.usersRepository = usersRepository;
        }

        public List<User> GetAllUsers()
        {
            return usersRepository.GetUsersIQueryable().ToList();
        }

        public List<User> GetAllUsersWithProfile()
        {
            return usersRepository.GetUsersWithProfile().ToList();
        }

        public User GetUserById(int id)
        {
            var user = usersRepository.GetUsersIQueryable().First(u => u.UserId == id);
            return user;
        }

        public User? GetUserByEmail(string email)
        {
            var user = usersRepository.GetUsersIQueryable().FirstOrDefault(u => u.Email == email);
            return user;
        }

        public User? GetUserByUsername(string username)
        {
            var user = usersRepository.GetUsersIQueryable().FirstOrDefault(u => u.Username == username);
            return user;
        }

        public void Create(UserModel model)
        {
            var newUser = new User
            {
                Email = model.Email,
                Password = model.Password,
                Username = model.Username
            };
            usersRepository.Create(newUser);
        }

        public void Delete(string email)
        {
            var user = GetUserByEmail(email);
            if (user != null)
                usersRepository.Delete(user);
        }

        public void Update(UserModel model)
        {
            var user = GetUserById(model.UserId);
            user.Email = model.Email;
            user.Password = model.Password;
            user.Username = model.Username;
            usersRepository.Update(user);
        }
    }
}
