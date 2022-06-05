using MDS_backend.Entities;

namespace MDS_backend.Repositories
{
    public interface IHeadquartersRepository
    {
        IQueryable<BandHQ> GetHeadquartersIQueryable();
        void Create(BandHQ hq);
        void Update(BandHQ hq);
        void Delete(BandHQ hq);
    }
}
