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

 
        [HttpGet("{id}")]
        public IActionResult GetBandById([FromRoute] int id)
        {
            var band = manager.GetBandById(id);
            return Ok(band);
        }


        [HttpGet("withMembers/{id}")]
        public IActionResult GetAllBandsWithMembers([FromRoute] int id)
        {
            var bands = manager.GetBandWithMembersById(id);
            return Ok(bands);
        }


        [HttpPost]
        public IActionResult Create([FromBody] MusicalBandModel model)
        {
            return Ok(manager.Create(model));
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



        [HttpGet("{id}/matchedUserProfiles")]
        public IActionResult GetBandMatches([FromRoute] int id)
        {
            return Ok(manager.GetMatchedUserProfilesByBandId(id));
        }


        [HttpPost("bandAndUserMatches")]
        public IActionResult CreateBandMatches([FromBody] BandAndUserMatchModel[] models)
        {
            manager.SaveBandAndUserMatches(models);
            return Ok();
        }


        [HttpPut("bandAndUserMatches")]
        public IActionResult UpdateBandMatches([FromBody] BandAndUserMatchModel[] models)
        {
            manager.UpdateBandAndUserMatches(models);
            return Ok();
        }


        [HttpDelete("bandAndUserMatches/{bandId}")]
        public IActionResult DeleteBandMaches([FromRoute] int bandId)
        {
            manager.DeleteAllBandMatches(bandId);
            return Ok();
        }


        [HttpPut("bandAndUserMatch")]
        public IActionResult UpdateBandAndUserMatch([FromBody] BandAndUserMatchModel model)
        {
            manager.UpdateBandAndUserMatch(model);
            return Ok();
        }


        [HttpDelete("bandAndUserMatch/{bandId}/{userId}")]
        public IActionResult DeleteBandAndUserMatch([FromRoute] int bandId, [FromRoute] int userId)
        {
            manager.DeleteBandAndUserMatch(bandId, userId);
            return Ok();
        }

    }
}
