using MDS_backend.Entities;
using MDS_backend.Models;

namespace MDS_backend.Managers
{
    public interface IHeadquartersManager
    {
        BandHQ? GetHqByBandId(int id);
        void Create(BandHQModel model);
        void Update(BandHQModel model);
        void Delete(int id);
    }
}
