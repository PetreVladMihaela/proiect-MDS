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
            usersRepository.Delete(user);
        }

        public void Update(UserModel model)
        {
            var user = GetUserByEmail(model.Email);
            user.Email = model.Email;
            user.Password = model.Password;
            user.Username = model.Email;
            usersRepository.Update(user);
        }
    }
}
