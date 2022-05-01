using MDS_backend.Repositories;
using MDS_backend.Entities;
using MDS_backend.Models;


namespace MDS_backend.Managers
{
    public class UserProfilesManager : IUserProfilesManager
    {
        private readonly IUserProfilesRepository profilesRepository;

        public UserProfilesManager(IUserProfilesRepository profilesRepository)
        {
            this.profilesRepository = profilesRepository;
        }

        public List<UserProfile> GetUserProfiles()
        {
            return profilesRepository.GetUserProfilesWithAddress().ToList();
        }

        public UserProfile GetProfileByEmail(string email)
        {
            var profile = profilesRepository.GetUserProfilesWithAddress().First(p => p.Email == email);
            return profile;
        }

        public UserProfile GetProfileWithOwnerByUsername(string username)
        {
            var profiles = profilesRepository.GetUserProfilesWithAddressAndOwner();
            return profiles.First(p => p.Owner.Username == username);
        }


        public void Create(UserProfileModel model)
        {
            var newProfile = new UserProfile
            {
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Age = model.Age,
                IsMusician = model.IsMusician,
                CanSing = model.CanSing,
                PlayedInstrument = model.PlayedInstrument,
                PreferredMusicGenre = model.PreferredMusicGenre,
                BandId = model.BandId

            };
            profilesRepository.Create(newProfile);
        }

        public void Delete(string email)
        {
            var profile = GetProfileByEmail(email);
            profilesRepository.Delete(profile);
        }

        public void Update(UserProfileModel model)
        {
            var profile = GetProfileByEmail(model.Email);
            profile.Email = model.Email;
            profile.FirstName = model.FirstName;
            profile.LastName = model.LastName;
            profile.Age = model.Age;
            profile.IsMusician = model.IsMusician;
            profile.CanSing = model.CanSing;
            profile.PlayedInstrument = model.PlayedInstrument;
            profile.PreferredMusicGenre = model.PreferredMusicGenre;
            profile.BandId = model.BandId;
            profilesRepository.Update(profile);
        }
    }
}
