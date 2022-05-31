using MDS_backend.Entities;

namespace MDS_backend.Repositories
{
    public interface IUserProfilesRepository
    {
        IQueryable<UserProfile> GetUserProfilesIQueryable();
        IQueryable<UserProfile> GetUserProfilesWithAddress();
        IQueryable<UserProfile> GetUserProfilesWithAddressAndOwner();

        void Create(UserProfile profile);
        void Update(UserProfile profile);
        void Delete(UserProfile profile);
    }
}
