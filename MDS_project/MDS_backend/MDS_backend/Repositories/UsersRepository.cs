using MDS_backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace MDS_backend.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly backendContext db;

        public UsersRepository(backendContext db)
        {
            this.db = db;
        }

        public IQueryable<User> GetUsersIQueryable()
        {
            return db.Users; 
        }

        public IQueryable<User> GetUsersWithProfile()
        {
            var users = db.Users.Include(u => u.Profile).ThenInclude(p => p.Address);
            return users;
        }


        public void Create(User user)
        {
            db.Users.Add(user);
            db.SaveChanges();
        }

        public void Update(User user)
        {
            db.Users.Update(user);
            db.SaveChanges();
        }

        public void Delete(User user)
        {
            db.Users.Remove(user);
            db.SaveChanges();
        }

    }
}
