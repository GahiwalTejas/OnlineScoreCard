using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Core.Metadata.Edm;
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
    [RoutePrefix("api/Players")]
    public class PlayersController : ApiController
    {


        private ScoreCardEntities db = new ScoreCardEntities();

        // GET: api/Players
        public IQueryable<Player> GetPlayers()
        {
            return db.Players;
        }
        //Post : api/Players/GetTeamPlayer
        [HttpPost]
        [Route("GetTeamPlayer")]
        public IQueryable<Object> GetTeamPlayer(List<Team> teams)
        {
            String team1 = teams.ElementAt(0).ToString();
            String team2 = teams.ElementAt(1).ToString();


            var query = from player in db.Players
                        join playerRole in db.PlayerRoles on player.RoleId equals playerRole.Id
                        join team in db.Teams on player.TeamId equals team.Id
                        where team.TeamName == team1 || team.TeamName == team2
                        select new
                        {
                            player.FirstName,
                            player.LastName,
                            playerRole.RollType,
                            team.TeamName
                        };

            return query;
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
        [HttpPost]
        [Route("PostPlayer/{id}")]  
        [ResponseType(typeof(Player))]
        public IHttpActionResult PostPlayer(int id,[FromBody]List<Player> players)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            foreach (var player in players)
            {  player.RoleId = player.RoleId;
                Console.WriteLine(player.RoleId);
                player.TeamId = id;
                
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