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
    public class PlayersScoresController : ApiController
    {
        private ScoreCardEntities db = new ScoreCardEntities();

        // GET: api/PlayersScores
        public IQueryable<PlayersScore> GetPlayersScores()
        {
            return db.PlayersScores;
        }

        // GET: api/PlayersScores/5
        [ResponseType(typeof(PlayersScore))]
        public IHttpActionResult GetPlayersScore(int id)
        {
            PlayersScore playersScore = db.PlayersScores.Find(id);
            if (playersScore == null)
            {
                return NotFound();
            }

            return Ok(playersScore);
        }

        // PUT: api/PlayersScores/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPlayersScore(int id, PlayersScore playersScore)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != playersScore.Id)
            {
                return BadRequest();
            }

            db.Entry(playersScore).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayersScoreExists(id))
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

        // POST: api/PlayersScores
        [ResponseType(typeof(PlayersScore))]
        public IHttpActionResult PostPlayersScore(PlayersScore playersScore)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PlayersScores.Add(playersScore);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = playersScore.Id }, playersScore);
        }

        // DELETE: api/PlayersScores/5
        [ResponseType(typeof(PlayersScore))]
        public IHttpActionResult DeletePlayersScore(int id)
        {
            PlayersScore playersScore = db.PlayersScores.Find(id);
            if (playersScore == null)
            {
                return NotFound();
            }

            db.PlayersScores.Remove(playersScore);
            db.SaveChanges();

            return Ok(playersScore);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlayersScoreExists(int id)
        {
            return db.PlayersScores.Count(e => e.Id == id) > 0;
        }
    }
}