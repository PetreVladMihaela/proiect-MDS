﻿using Microsoft.AspNetCore.Mvc;
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

 
        [HttpGet("{email}")]
        public IActionResult GetUserProfileByEmail([FromRoute] string email)
        {
            var user = manager.GetProfileByEmail(email);
            return Ok(user);
        }



        [HttpPost]
        public IActionResult Create([FromBody] UserProfileModel model)
        {
            manager.Create(model);
            return Ok();
        }


        [HttpDelete("{email}")]
        public IActionResult Delete([FromRoute] string email)
        {
            manager.Delete(email);
            return Ok();
        }


        [HttpPut]
        public IActionResult Update([FromBody] UserProfileModel model)
        {
            manager.Update(model);
            return Ok();
        }

    }
}
