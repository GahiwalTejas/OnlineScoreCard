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
    public class PlayerRolesController : ApiController
    {
        private ScoreCardEntities db = new ScoreCardEntities();

        // GET: api/PlayerRoles
        public IQueryable<PlayerRole> GetPlayerRoles()
        {
            return db.PlayerRoles;
        }

        // GET: api/PlayerRoles/5
        [ResponseType(typeof(PlayerRole))]
        public IHttpActionResult GetPlayerRole(int id)
        {
            PlayerRole playerRole = db.PlayerRoles.Find(id);
            if (playerRole == null)
            {
                return NotFound();
            }

            return Ok(playerRole);
        }

        // PUT: api/PlayerRoles/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPlayerRole(int id, PlayerRole playerRole)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != playerRole.Id)
            {
                return BadRequest();
            }

            db.Entry(playerRole).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlayerRoleExists(id))
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

        // POST: api/PlayerRoles
        [ResponseType(typeof(PlayerRole))]
        public IHttpActionResult PostPlayerRole(PlayerRole playerRole)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PlayerRoles.Add(playerRole);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = playerRole.Id }, playerRole);
        }

        // DELETE: api/PlayerRoles/5
        [ResponseType(typeof(PlayerRole))]
        public IHttpActionResult DeletePlayerRole(int id)
        {
            PlayerRole playerRole = db.PlayerRoles.Find(id);
            if (playerRole == null)
            {
                return NotFound();
            }

            db.PlayerRoles.Remove(playerRole);
            db.SaveChanges();

            return Ok(playerRole);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlayerRoleExists(int id)
        {
            return db.PlayerRoles.Count(e => e.Id == id) > 0;
        }
    }
}