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
                IsComplete = model.IsComplete
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
            //band.DateFormed = model.DateFormed;
            band.IsComplete = model.IsComplete;
            bandsRepository.Update(band);
        }


        public void SaveBandAndUserMatches(BandAndUserMatchModel[] models)
        {
            foreach (BandAndUserMatchModel model in models)
            {
                var newMatch = new BandAndUserMatch
                {
                    BandId = model.BandId,
                    UserId = model.UserId,
                    Type = model.Type
                };
                bandsRepository.AddBandAndUserMatch(newMatch);
            }
        }

        public void UpdateBandAndUserMatches(BandAndUserMatchModel[] models)
        {
            foreach (BandAndUserMatchModel model in models)
            {
                UpdateBandAndUserMatch(model);
            }
        }

        public void UpdateBandAndUserMatch(BandAndUserMatchModel model)
        {
            var match = bandsRepository.GetMatchesByBandId(model.BandId).First(m => m.UserId == model.UserId);
            match.Type = model.Type;
            bandsRepository.UpdateBandAndUserMatch(match);
        }

        public void DeleteBandAndUserMatch(int bandId, int userId)
        {
            var match = bandsRepository.GetMatchesByBandId(bandId).First(match => match.UserId == userId);
            bandsRepository.RemoveBandAndUserMatch(match);
        }

        public void DeleteAllBandMatches(int bandId)
        {
            var matches = bandsRepository.GetMatchesByBandId(bandId).ToList();
            foreach (BandAndUserMatch match in matches) {
                bandsRepository.RemoveBandAndUserMatch(match);
            }
        }

        public List<UserProfile> GetMatchedUserProfilesByBandId(int bandId)
        {
            List<UserProfile> userProfiles = new List<UserProfile>();
            List<BandAndUserMatch> matches = bandsRepository.GetMatchesWithUserProfilesByBandId(bandId).ToList();

            foreach (var match in matches) {
                userProfiles.Add(match.UserProfile);
            }
            return userProfiles;
        }

    }
}
