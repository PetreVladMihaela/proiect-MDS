using MDS_backend.Entities;

namespace MDS_backend.Repositories
{
    public interface IBandsRepository
    {
        IQueryable<MusicalBand> GetMusicalBands();
        IQueryable<MusicalBand> GetBandsWithMembers();

        int Create(MusicalBand band);
        void Update(MusicalBand band);
        void Delete(MusicalBand band);

        void AddBandAndUserMatch(BandAndUserMatch match);
        void RemoveBandAndUserMatch(BandAndUserMatch match);
        void UpdateBandAndUserMatch(BandAndUserMatch match);
        IQueryable<BandAndUserMatch> GetMatchesByBandId(int bandId);
        IQueryable<BandAndUserMatch> GetMatchesWithUserProfilesByBandId(int bandId);
    }
}
