using Microsoft.AspNetCore.Mvc;
using MDS_backend.Managers;
using MDS_backend.Models;


namespace MDS_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        private readonly IUsersManager manager;

        public UsersController(IUsersManager manager)
        {
            this.manager = manager;
        }


        [HttpGet("")]
        public IActionResult GetAllUsers()
        {
            var users = manager.GetAllUsers();
            return Ok(users);
        }


        [HttpGet("withProfile")]
        public IActionResult GetUsersWithProfile()
        {
            var users = manager.GetAllUsersWithProfile();
            return Ok(users);
        }

 
        [HttpGet("getByEmail/{email}")]
        public IActionResult GetUserByEmail([FromRoute] string email)
        {
            var user = manager.GetUserByEmail(email);
            return Ok(user);
        }


        [HttpGet("getByUsername/{username}")]
        public IActionResult GetUserByUsername([FromRoute] string username)
        {
            var user = manager.GetUserByUsername(username);
            return Ok(user);
        }



        [HttpPost]
        public IActionResult Create([FromBody] UserModel model)
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
        public IActionResult Update([FromBody] UserModel model)
        {
            manager.Update(model);
            return Ok();
        }

    }
}
