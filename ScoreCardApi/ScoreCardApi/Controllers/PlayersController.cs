using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Numerics;
using System.Web.Http;
using System.Web.Http.Description;
using ScoreCardApi.Models;

namespace ScoreCardApi.Controllers
{
    public class PlayersController : ApiController
    {
        

        private ScoreCardEntities db = new ScoreCardEntities();

        // GET: api/Players
        public IQueryable<Player> GetPlayers()
        {
            return db.Players;
        }

        // GET: api/Players/5
        [ResponseType(typeof(Player))]
        public IHttpActionResult GetPlayer(int id)
        {
            Player player = db.Players.Find(id);
            if (player == null)
            {
                return NotFound();
            }

            return Ok(player);
        }

        // PUT: api/Players/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPlayer(int id, Player player)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != player.Id)
            {
                return BadRequest();
            }

            db.Entry(player).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayerExists(id))
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

        // POST: api/Players
        [ResponseType(typeof(Player))]
        public IHttpActionResult PostPlayer(List<Player> players)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            foreach (var player in players)
            {
                db.Players.Add(player);

            }


            db.SaveChanges();
            return Ok();
        }

        // DELETE: api/Players/5
        [ResponseType(typeof(Player))]
        public IHttpActionResult DeletePlayer(int id)
        {
            Player player = db.Players.Find(id);
            if (player == null)
            {
                return NotFound();
            }

            db.Players.Remove(player);
            db.SaveChanges();

            return Ok(player);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlayerExists(int id)
        {
            return db.Players.Count(e => e.Id == id) > 0;
        }
    }
}