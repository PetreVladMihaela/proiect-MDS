using MDS_backend.Repositories;
using MDS_backend.Entities;
using MDS_backend.Models;


namespace MDS_backend.Managers
{
    public class HeadquartersManager : IHeadquartersManager
    {
        private readonly IHeadquartersRepository bandHeadquartersRepository;

        public HeadquartersManager(IHeadquartersRepository headquartersRepository)
        {
            this.bandHeadquartersRepository = headquartersRepository;
        }

        public BandHQ? GetHqByBandId(int id)
        {
            var headquarters = bandHeadquartersRepository.GetHeadquartersIQueryable();
            return headquarters.FirstOrDefault(hq => hq.BandId == id);
        }

        public void Create(BandHQModel model)
        {
            var newBandHQ = new BandHQ
            {
                BandId = model.BandId,
                Country = model.Country,
                City = model.City,
                Address = model.Address,
                SquareMeters = model.SquareMeters
            };
            bandHeadquartersRepository.Create(newBandHQ);
        }

        public void Update(BandHQModel model)
        {
            var hq = GetHqByBandId(model.BandId);
            if (hq != null)
            {
                hq.Country = model.Country;
                hq.City = model.City;
                hq.Address = model.Address;
                hq.SquareMeters = model.SquareMeters;
                bandHeadquartersRepository.Update(hq);
            }
        }

        public void Delete(int id)
        {
            var hq = GetHqByBandId(id);
            if (hq != null)
                bandHeadquartersRepository.Delete(hq);
        }
    }
}
