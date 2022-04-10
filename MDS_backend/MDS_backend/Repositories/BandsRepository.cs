using MDS_backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace MDS_backend.Repositories
{
    public class BandsRepository : IBandsRepository
    {
        private readonly backendContext db;

        public BandsRepository(backendContext db)
        {
            this.db = db;
        }

        public IQueryable<MusicalBand> GetMusicalBands()
        {
            return db.MusicalBands.Include(band => band.HQ); 
        }

        public IQueryable<MusicalBand> GetBandsWithMembers()
        {
            var bands = GetMusicalBands().Include(band => band.Members);
            return bands;
        }


        public void Create(MusicalBand band)
        {
            db.MusicalBands.Add(band);
            db.SaveChanges();
        }

        public void Update(MusicalBand band)
        {
            db.MusicalBands.Update(band);
            db.SaveChanges();
        }

        public void Delete(MusicalBand band)
        {
            db.MusicalBands.Remove(band);
            db.SaveChanges();
        }

    }
}
