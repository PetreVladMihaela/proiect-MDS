using MDS_backend.Entities;
using MDS_backend.Models;

namespace MDS_backend.Managers
{
    public interface IBandsManager
    {
        List<MusicalBand> GetMusicalBands();
        List<MusicalBand> GetBandsWithMembers();
        MusicalBand GetBandById(int id);

        void Create(MusicalBandModel model);
        void Update(MusicalBandModel model);
        void Delete(int id);
    }
}
