using MDS_backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace MDS_backend.Repositories
{
    public class UserAddressesRepository : IUserAddressesRepository
    {
        private readonly backendContext db;

        public UserAddressesRepository(backendContext db)
        {
            this.db = db;
        }

        public IQueryable<UserAddress> GetUserAddressesIQueryable()
        {
            return db.UserAddresses; 
        }

        public void Create(UserAddress address)
        {
            db.UserAddresses.Add(address);
            db.SaveChanges();
        }

        public void Update(UserAddress address)
        {
            db.UserAddresses.Update(address);
            db.SaveChanges();
        }

        public void Delete(UserAddress address)
        {
            db.UserAddresses.Remove(address);
            db.SaveChanges();
        }

    }
}
