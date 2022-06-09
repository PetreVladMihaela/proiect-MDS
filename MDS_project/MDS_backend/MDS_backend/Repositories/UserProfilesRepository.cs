using MDS_backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace MDS_backend.Repositories
{
    public class UserProfilesRepository : IUserProfilesRepository
    {
        private readonly backendContext db;

        public UserProfilesRepository(backendContext db)
        {
            this.db = db;
        }

        public IQueryable<UserProfile> GetUserProfilesIQueryable()
        {
            return db.UserProfiles; 
        }

        public IQueryable<UserProfile> GetUserProfilesWithAddressAndOwner()
        {
            var profiles = GetUserProfilesIQueryable().Include(p => p.Address).Include(p => p.Owner);
            return profiles;
        }

        public void Create(UserProfile profile)
        {
            db.UserProfiles.Add(profile);
            db.SaveChanges();
        }

        public void Update(UserProfile profile)
        {
            db.UserProfiles.Update(profile);
            db.SaveChanges();
        }

        public void Delete(UserProfile profile)
        {
            db.UserProfiles.Remove(profile);
            db.SaveChanges();
        }


        public IQueryable<BandAndUserMatch> GetInvitationsToJoinBands(int userId)
        {
            var invitations = db.BandAndUserMatches.Where(match => match.Type == "invitation");
            return invitations.Where(invite => invite.UserId == userId).Include(match => match.MusicalBand);
        }

        public IQueryable<BandAndUserMatch> GetAllMatchesByUserId(int userId)
        {
            return db.BandAndUserMatches.Where(match => match.UserId == userId);
        }

        public void RemoveBandAndUserMatch(BandAndUserMatch match)
        {
            db.BandAndUserMatches.Remove(match);
            db.SaveChanges();
        }

    }
}
