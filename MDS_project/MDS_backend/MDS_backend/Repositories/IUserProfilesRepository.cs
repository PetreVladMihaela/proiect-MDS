using MDS_backend.Entities;

namespace MDS_backend.Repositories
{
    public interface IUserProfilesRepository
    {
        IQueryable<UserProfile> GetUserProfilesIQueryable();
        IQueryable<UserProfile> GetUserProfilesWithAddressAndOwner();

        void Create(UserProfile profile);
        void Update(UserProfile profile);
        void Delete(UserProfile profile);

        IQueryable<BandAndUserMatch> GetInvitationsToJoinBands(int userId);
        IQueryable<BandAndUserMatch> GetAllMatchesByUserId(int userId);
        void RemoveBandAndUserMatch(BandAndUserMatch match);
    }
}
