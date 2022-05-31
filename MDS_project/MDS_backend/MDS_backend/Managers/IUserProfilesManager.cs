using MDS_backend.Entities;
using MDS_backend.Models;

namespace MDS_backend.Managers
{
    public interface IUserProfilesManager
    { 
        List<UserProfile> GetUserProfiles();
        UserProfile GetProfileByEmail(string email);
        UserProfile? GetProfileWithOwnerByUsername(string username);

        void AddBand(UserProfileModel model);
        void Create(UserProfileModel model);
        void Update(UserProfileModel model);
        void Delete(string email);

    }
}
