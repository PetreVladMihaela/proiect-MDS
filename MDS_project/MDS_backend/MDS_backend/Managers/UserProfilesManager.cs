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
            return profilesRepository.GetUserProfilesWithAddressAndOwner().ToList();
        }

        public UserProfile GetProfileByEmail(string email)
        {
            var profiles = profilesRepository.GetUserProfilesWithAddressAndOwner();
            return profiles.First(p => p.Owner.Email == email); ;
        }

        public UserProfile? GetProfileByUsername(string username)
        {
            var profiles = profilesRepository.GetUserProfilesWithAddressAndOwner();
            return profiles.FirstOrDefault(p => p.Owner.Username == username);
        }


        public List<MusicalBand> GetBandsInvitedToJoin(int userId)
        {
            List<MusicalBand> bands = new List<MusicalBand>();
            List<BandAndUserMatch> invites = profilesRepository.GetInvitationsToJoinBands(userId).ToList();

            foreach (var invite in invites)
            {
                bands.Add(invite.MusicalBand);
            }
            return bands;
        }

        public void DeleteAllUserMatches(int userId)
        {
            var matches = profilesRepository.GetAllMatchesByUserId(userId).ToList();
            foreach (BandAndUserMatch match in matches)
            {
                profilesRepository.RemoveBandAndUserMatch(match);
            }
        }


        public void CreateProfile(UserProfileModel model)
        {
            var newProfile = new UserProfile
            {
                UserId = model.UserId,
                Phone = model.Phone,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Age = model.Age,
                Occupation = model.Occupation,
                Trait1 = model.Trait1,
                Trait2 = model.Trait2,
                CanSing = model.CanSing,
                PlayedInstrument = model.PlayedInstrument,
                PreferredMusicGenre = model.PreferredMusicGenre,
                BandId = model.BandId
            };
            profilesRepository.Create(newProfile);
        }

        public void UpdateWholeProfile(UserProfileModel model)
        {
            var profile = GetProfileByEmail(model.Owner.Email);
            profile.Phone = model.Phone;
            profile.FirstName = model.FirstName;
            profile.LastName = model.LastName;
            profile.Age = model.Age;
            profile.Occupation = model.Occupation;
            profile.Trait1 = model.Trait1;
            profile.Trait2 = model.Trait2;
            profile.CanSing = model.CanSing;
            profile.PlayedInstrument = model.PlayedInstrument;
            profile.PreferredMusicGenre = model.PreferredMusicGenre;
            //profile.BandId = model.BandId;
            profilesRepository.Update(profile);
        }
 
        public void UpdateBandId(string userEmail, int bandId)
        {
            var profile = GetProfileByEmail(userEmail);
            profile.BandId = bandId;
            profilesRepository.Update(profile);
        }

        public void DeleteProfile(string email)
        {
            var profile = GetProfileByEmail(email);
            profilesRepository.Delete(profile);
        }
    }
}
