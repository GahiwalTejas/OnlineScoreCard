using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ScoreCardApi.Models;

namespace ScoreCardApi.Controllers
{
    [RoutePrefix("api/TeamsData")]
    public class TeamsDatasController : ApiController
    {
        private ScoreCardEntities db = new ScoreCardEntities();

        // GET: api/TeamsDatas
        public IQueryable<TeamsData> GetTeamsDatas()
        {
            return db.TeamsDatas;
        }

        // GET: api/TeamsDatas/5
        [ResponseType(typeof(TeamsData))]
        public IHttpActionResult GetTeamsData(int id)
        {
            TeamsData teamsData = db.TeamsDatas.Find(id);
            if (teamsData == null)
            {
                return NotFound();
            }

            return Ok(teamsData);
        }

        // PUT: api/TeamsDatas/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTeamsData(int id, TeamsData teamsData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != teamsData.Id)
            {
                return BadRequest();
            }

            db.Entry(teamsData).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamsDataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
        [HttpPost]
        [Route("teamsData")]
        // POST: api/TeamsDatas
        [ResponseType(typeof(TeamsData))]
        public IHttpActionResult PostTeamsData([FromBody] List<TeamsData> teamsData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            foreach(var item in teamsData)
            {
                // var result = db.TeamsDatas.Where(team => team.TeamId == item.TeamId).ToList();
                var existingTeam = db.TeamsDatas.FirstOrDefault(team => team.TeamId == item.TeamId);

                if (existingTeam != null)
                {
                    existingTeam.MatchPlayed += item.MatchPlayed;
                    existingTeam.Win += item.Win;
                    existingTeam.Loss += item.Loss;
                    existingTeam.Tie = (existingTeam.Tie ?? 0) + (item.Tie ?? 0);
                }
                else
                {
                    db.TeamsDatas.Add(item);
                }
            }
        db.SaveChanges();

            return Content(HttpStatusCode.Accepted, new { status = "success", data = "Teams Scores Updated" });

        }

        // DELETE: api/TeamsDatas/5
        [ResponseType(typeof(TeamsData))]
        public IHttpActionResult DeleteTeamsData(int id)
        {
            TeamsData teamsData = db.TeamsDatas.Find(id);
            if (teamsData == null)
            {
                return NotFound();
            }

            db.TeamsDatas.Remove(teamsData);
            db.SaveChanges();

            return Ok(teamsData);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TeamsDataExists(int id)
        {
            return db.TeamsDatas.Count(e => e.Id == id) > 0;
        }
    }
}