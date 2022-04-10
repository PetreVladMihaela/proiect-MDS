﻿using MDS_backend.Entities;

namespace MDS_backend.Repositories
{
    public interface IBandsRepository
    {
        IQueryable<MusicalBand> GetMusicalBands();
        IQueryable<MusicalBand> GetBandsWithMembers();

        void Create(MusicalBand band);
        void Update(MusicalBand band);
        void Delete(MusicalBand band);
    }
}
