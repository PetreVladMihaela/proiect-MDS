using MDS_backend.Entities;

namespace MDS_backend.Repositories
{
    public class HeadquartersRepository : IHeadquartersRepository
    {
        private readonly backendContext db;

        public HeadquartersRepository(backendContext db)
        {
            this.db = db;
        }

        public IQueryable<BandHQ> GetHeadquartersIQueryable()
        {
            return db.Headquarters; 
        }

        public void Create(BandHQ hq)
        {
            db.Headquarters.Add(hq);
            db.SaveChanges();
        }

        public void Update(BandHQ hq)
        {
            db.Headquarters.Update(hq);
            db.SaveChanges();
        }

        public void Delete(BandHQ hq)
        {
            db.Headquarters.Remove(hq);
            db.SaveChanges();
        }
    }
}
