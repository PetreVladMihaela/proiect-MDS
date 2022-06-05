using Microsoft.AspNetCore.Mvc;
using MDS_backend.Managers;
using MDS_backend.Models;


namespace MDS_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class BandHeadquartersController : ControllerBase
    {
        private readonly IHeadquartersManager manager;

        public BandHeadquartersController(IHeadquartersManager manager)
        {
            this.manager = manager;
        }

        [HttpGet("getHqByBandId/{id}")]
        public IActionResult GetUserAddressByEmail([FromRoute] int id)
        {
            return Ok(manager.GetHqByBandId(id));
        }

        [HttpPost]
        public IActionResult Create([FromBody] BandHQModel model)
        {
            manager.Create(model);
            return Ok();
        }

        [HttpPut]
        public IActionResult Update([FromBody] BandHQModel model)
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
