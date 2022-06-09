using MDS_backend.Entities;
using MDS_backend.Models;

namespace MDS_backend.Managers
{
    public interface IUserAddressesManager
    {
        UserAddress? GetUserAddressByUserId(int id);
        void Create(UserAddressModel model);
        void Update(UserAddressModel model);
        void Delete(int id);
    }
}
