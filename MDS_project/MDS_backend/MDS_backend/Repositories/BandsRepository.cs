﻿using MDS_backend.Entities;
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
            var bands = GetMusicalBands().Include(band => band.Members).ThenInclude(profile => profile.Owner);
            return bands;
        }

        public int Create(MusicalBand band)
        {
            db.MusicalBands.Add(band);
            db.SaveChanges();
            return band.BandId;
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



        public void AddBandAndUserMatch(BandAndUserMatch match)
        {
            db.BandAndUserMatches.Add(match);
            db.SaveChanges();
        }

        public void RemoveBandAndUserMatch(BandAndUserMatch match)
        {
            db.BandAndUserMatches.Remove(match);
            db.SaveChanges();
        }

        public void UpdateBandAndUserMatch(BandAndUserMatch match)
        {
            db.BandAndUserMatches.Update(match);
            db.SaveChanges();
        }

        public IQueryable<BandAndUserMatch> GetMatchesByBandId(int bandId)
        {
            var matches = db.BandAndUserMatches.Where(match => match.Type == "survey match" ||
                                 match.Type == "invitation" || match.Type == "declined invitation");
            return matches.Where(match => match.BandId == bandId);
        }

        public IQueryable<BandAndUserMatch> GetMatchesWithUserProfilesByBandId(int bandId)
        {
            return GetMatchesByBandId(bandId).Include(match => match.UserProfile)
                .ThenInclude(profile => profile.Owner);
        }

    }
}
