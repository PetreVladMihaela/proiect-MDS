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

        public List<UserAddress> GetAllUserAddresses()
        {
            return userAddressesRepository.GetUserAddressesIQueryable().ToList();
        }

        public UserAddress? GetUserAddressByEmail(string email)
        {
            var addresses = userAddressesRepository.GetUserAddressesIQueryable();
            return addresses.FirstOrDefault(a => a.Email == email);
        }

        public void Create(UserAddressModel model)
        {
            var newUserAddress = new UserAddress
            {
                Email = model.Email,
                Country = model.Country,
                City = model.City,
                Street = model.Street
            };
            userAddressesRepository.Create(newUserAddress);
        }

        public void Update(UserAddressModel model)
        {
            var address = GetUserAddressByEmail(model.Email);
            //address.Email = model.Email;
            if (address != null)
            {
                address.Country = model.Country;
                address.City = model.City;
                address.Street = model.Street;
                userAddressesRepository.Update(address);
            }
        }

        public void Delete(string email)
        {
            var address = GetUserAddressByEmail(email);
            if (address != null)
                userAddressesRepository.Delete(address);
        }
    }
}
