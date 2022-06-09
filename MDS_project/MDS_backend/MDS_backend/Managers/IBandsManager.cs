using MDS_backend.Entities;
using MDS_backend.Models;

namespace MDS_backend.Managers
{
    public interface IBandsManager
    {
        List<MusicalBand> GetMusicalBands();
        List<MusicalBand> GetBandsWithMembers();
        MusicalBand GetBandById(int id);
        MusicalBand GetBandWithMembersById(int id);

        int Create(MusicalBandModel model);
        void Update(MusicalBandModel model);
        void Delete(int id);

        void SaveBandAndUserMatches(BandAndUserMatchModel[] models);
        void UpdateBandAndUserMatches(BandAndUserMatchModel[] models);
        void UpdateBandAndUserMatch(BandAndUserMatchModel model);
        void DeleteBandAndUserMatch(int bandId, int userId);
        void DeleteAllBandMatches(int bandId);
        List<UserProfile> GetMatchedUserProfilesByBandId(int bandId);
    }
}
