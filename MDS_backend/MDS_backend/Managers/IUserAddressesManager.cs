using MDS_backend.Entities;
using MDS_backend.Models;

namespace MDS_backend.Managers
{
    public interface IUserAddressesManager
    {
        List<UserAddress> GetAllUserAddresses();
        UserAddress? GetUserAddressByEmail(string email);
        void Create(UserAddressModel model);
        void Update(UserAddressModel model);
        void Delete(string email);

    }
}
