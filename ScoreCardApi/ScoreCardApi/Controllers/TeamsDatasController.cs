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

        // POST: api/TeamsDatas
        [ResponseType(typeof(TeamsData))]
        public IHttpActionResult PostTeamsData(TeamsData teamsData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TeamsDatas.Add(teamsData);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = teamsData.Id }, teamsData);
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