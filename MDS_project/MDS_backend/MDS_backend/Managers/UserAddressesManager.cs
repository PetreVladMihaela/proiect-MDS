using MDS_backend.Repositories;
using MDS_backend.Entities;
using MDS_backend.Models;


namespace MDS_backend.Managers
{
    public class UserAddressesManager : IUserAddressesManager
    {
        private readonly IUserAddressesRepository userAddressesRepository;

        public UserAddressesManager(IUserAddressesRepository userAddressesRepository)
        {
            this.userAddressesRepository = userAddressesRepository;
        }

        public UserAddress? GetUserAddressByUserId(int id)
        {
            var addresses = userAddressesRepository.GetUserAddressesIQueryable();
            return addresses.FirstOrDefault(a => a.UserId == id);
        }

        public void Create(UserAddressModel model)
        {
            var newUserAddress = new UserAddress
            {
                UserId = model.UserId,
                Country = model.Country,
                City = model.City,
                Street = model.Street
            };
            userAddressesRepository.Create(newUserAddress);
        }

        public void Update(UserAddressModel model)
        {
            var address = GetUserAddressByUserId(model.UserId);
            if (address != null)
            {
                address.Country = model.Country;
                address.City = model.City;
                address.Street = model.Street;
                userAddressesRepository.Update(address);
            }
        }

        public void Delete(int id)
        {
            var address = GetUserAddressByUserId(id);
            if (address != null)
                userAddressesRepository.Delete(address);
        }
    }
}
