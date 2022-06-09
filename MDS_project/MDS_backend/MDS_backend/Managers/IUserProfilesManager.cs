using MDS_backend.Entities;
using MDS_backend.Models;

namespace MDS_backend.Managers
{
    public interface IUserProfilesManager
    { 
        List<UserProfile> GetUserProfiles();
        UserProfile GetProfileByEmail(string email);
        UserProfile? GetProfileByUsername(string username);

        List<MusicalBand> GetBandsInvitedToJoin(int userId);
        void DeleteAllUserMatches(int userId);

        void CreateProfile(UserProfileModel model);
        void UpdateWholeProfile(UserProfileModel model);
        void UpdateBandId(string userEmail, int bandId);
        void DeleteProfile(string email);
    }
}
