using Microsoft.AspNetCore.Mvc;
using MDS_backend.Managers;
using MDS_backend.Models;


namespace MDS_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class MusicalBandsController : ControllerBase
    {
        private readonly IBandsManager manager;

        public MusicalBandsController(IBandsManager manager)
        {
            this.manager = manager;
        }


        [HttpGet("")]
        public IActionResult GetAllBands()
        {
            var bands = manager.GetMusicalBands();
            return Ok(bands);
        }


        [HttpGet("withMembers")]
        public IActionResult GetUsersWithProfile()
        {
            var bands = manager.GetBandsWithMembers();
            return Ok(bands);
        }

 
        [HttpGet("{id}")]
        public IActionResult GetBandById([FromRoute] int id)
        {
            var band = manager.GetBandById(id);
            return Ok(band);
        }



        [HttpPost]
        public IActionResult Create([FromBody] MusicalBandModel model)
        {
            manager.Create(model);
            return Ok();
        }


        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            manager.Delete(id);
            return Ok();
        }


        [HttpPut]
        public IActionResult Update([FromBody] MusicalBandModel model)
        {
            manager.Update(model);
            return Ok();
        }

    }
}
