using MDS_backend.Entities;

namespace MDS_backend.Repositories
{
    public interface IUserAddressesRepository
    {
        IQueryable<UserAddress> GetUserAddressesIQueryable();
        void Create(UserAddress address);
        void Update(UserAddress address);
        void Delete(UserAddress address);
    }
}
