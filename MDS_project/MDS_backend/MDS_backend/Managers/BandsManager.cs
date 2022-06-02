using MDS_backend.Repositories;
using MDS_backend.Entities;
using MDS_backend.Models;


namespace MDS_backend.Managers
{
    public class BandsManager : IBandsManager
    {
        private readonly IBandsRepository bandsRepository;

        public BandsManager(IBandsRepository bandsRepository)
        {
            this.bandsRepository = bandsRepository;
        }

        public List<MusicalBand> GetMusicalBands()
        {
            return bandsRepository.GetMusicalBands().ToList();
        }

        public List<MusicalBand> GetBandsWithMembers()
        {
            return bandsRepository.GetBandsWithMembers().ToList();
        }

        public MusicalBand GetBandById(int id)
        {
            var band = bandsRepository.GetMusicalBands().First(b => b.BandId == id);
            return band;
        }

        public MusicalBand GetBandWithMembersById(int id)
        {
            var band = bandsRepository.GetBandsWithMembers().First(b => b.BandId == id);
            return band;
        }

        public int Create(MusicalBandModel model)
        {
            var newBand = new MusicalBand
            {
                //BandId = model.BandId,
                Name = model.Name,
                MusicGenre = model.MusicGenre,
                DateFormed = model.DateFormed,
                Complete = model.Complete
            };
            return bandsRepository.Create(newBand);
        }

        public void Delete(int id)
        {
            var band = GetBandById(id);
            bandsRepository.Delete(band);
        }

        public void Update(MusicalBandModel model)
        {
            var band = GetBandById(model.BandId);
            band.Name = model.Name;
            band.MusicGenre = model.MusicGenre;
            band.DateFormed = model.DateFormed;
            band.Complete = model.Complete;
            bandsRepository.Update(band);
        }
    }
}
