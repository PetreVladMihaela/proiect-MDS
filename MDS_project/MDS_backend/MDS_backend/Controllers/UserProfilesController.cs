using Microsoft.AspNetCore.Mvc;
using MDS_backend.Managers;
using MDS_backend.Models;


namespace MDS_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserProfilesController : ControllerBase
    {
        private readonly IUserProfilesManager manager;

        public UserProfilesController(IUserProfilesManager manager)
        {
            this.manager = manager;
        }


        [HttpGet("")]
        public IActionResult GetAllUserProfiles()
        {
            var profiles = manager.GetUserProfiles();
            return Ok(profiles);
        }

 
        [HttpGet("getByOwnerEmail/{email}")]
        public IActionResult GetUserProfileByOwnerEmail([FromRoute] string email)
        {
            var profile = manager.GetProfileByEmail(email);
            return Ok(profile);
        }


        [HttpGet("getByOwnerUsername/{username}")]
        public IActionResult GetUserProfileByOwnerUsername([FromRoute] string username)
        {
            var profile = manager.GetProfileByUsername(username);
            return Ok(profile);
        }


        [HttpGet("{userId}/bandsInvitedToJoin")]
        public IActionResult GetBandsInvitedToJoin([FromRoute] int userId)
        {
            return Ok(manager.GetBandsInvitedToJoin(userId));
        }


        [HttpDelete("bandAndUserMatches/{userId}")]
        public IActionResult DeleteUserMatches([FromRoute] int userId)
        {
            manager.DeleteAllUserMatches(userId);
            return Ok();
        }


        [HttpPost]
        public IActionResult Create([FromBody] UserProfileModel model)
        {
            manager.CreateProfile(model);
            return Ok();
        }


        [HttpPut]
        public IActionResult Update([FromBody] UserProfileModel model)
        {
            manager.UpdateWholeProfile(model);
            return Ok();
        }


        [HttpDelete("{email}")]
        public IActionResult Delete([FromRoute] string email)
        {
            manager.DeleteProfile(email);
            return Ok();
        }


        [HttpPut("addBandToUserProfile/{userEmail}")]
        public IActionResult AddBandToUserProfile([FromRoute] string userEmail, [FromBody] int bandId)
        {
            manager.UpdateBandId(userEmail, bandId);
            return Ok();
        }

    }
}
