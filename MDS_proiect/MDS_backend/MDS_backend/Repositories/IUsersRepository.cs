using MDS_backend.Entities;

namespace MDS_backend.Repositories
{
    public interface IUsersRepository
    {
        IQueryable<User> GetUsersIQueryable();
        IQueryable<User> GetUsersWithProfile();

        void Create(User user);
        void Update(User user);
        void Delete(User user);
    }
}
