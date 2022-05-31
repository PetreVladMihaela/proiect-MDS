using Microsoft.AspNetCore.Mvc;
using MDS_backend.Managers;
using MDS_backend.Models;


namespace MDS_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserAddressesController : ControllerBase
    {
        private readonly IUserAddressesManager manager;

        public UserAddressesController(IUserAddressesManager manager)
        {
            this.manager = manager;
        }


        [HttpGet("")]
        public IActionResult GetAllUserAddresses()
        {
            return Ok(manager.GetAllUserAddresses());
        }

        [HttpGet("getByUserId/{id}")]
        public IActionResult GetUserAddressByEmail([FromRoute] int id)
        {
            return Ok(manager.GetUserAddressByUserId(id));
        }


        [HttpPost]
        public IActionResult Create([FromBody] UserAddressModel model)
        {
            manager.Create(model);
            return Ok();
        }

        [HttpPut]
        public IActionResult Update([FromBody] UserAddressModel model)
        {
            manager.Update(model);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            manager.Delete(id);
            return Ok();
        }

    }
}
