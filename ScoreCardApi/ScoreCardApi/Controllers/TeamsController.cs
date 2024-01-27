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
    [RoutePrefix("api/Teams")]

    public class TeamsController : ApiController
    {
        private ScoreCardEntities db = new ScoreCardEntities();

        // GET: api/Teams
        public IQueryable<Team> GetTeams()
        {
            return db.Teams;
        }

        // GET: api/Teams/5
        [ResponseType(typeof(Team))]
        public IHttpActionResult GetTeam(int id)
        {
            Team team = db.Teams.Find(id);
            if (team == null)
            {
                return NotFound();
            }

            return Ok(team);
        }

        // PUT: api/Teams/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTeam(int id, Team team)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != team.Id)
            {
                return BadRequest();
            }

            db.Entry(team).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamExists(id))
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

        // POST: api/Teams
        //   [ResponseType(typeof(Team))]  
        [Route("PostTeam/{id}")]
        [HttpPost]
        public IHttpActionResult PostTeam(int id,[FromBody] List<Team> teams)
        {
            if (!ModelState.IsValid)
            {
            //    return new HttpResponseMessage(HttpStatusCode.NotModified);
                return Content(HttpStatusCode.NotModified, new { status = "Data Invalid", data ="Invalid Data" });
            }


            foreach (var item in teams)
            {
             //item.id = id;    Its Wrong because i want to store SubscriberId .... 
              item.SubscriberId = id;
              
                    db.Teams.Add(item);

            }
            List <int> list=new List<int>();
          //  String teamId = "";
            db.SaveChanges();
            foreach (var item in teams)
            {
                int a = db.Teams
   .Where(team => team.TeamName == item.TeamName)
   .Select(team => team.Id)
   .FirstOrDefault();


                list.Add(a);    

            }

            //Console.WriteLine(teamId);


            // return new HttpResponseMessage(HttpStatusCode.Created)
            //{
            //  Content = new StringContent(teamId)
            //};
            // return request.CreateResponse(HttpStatusCode.Created,list);
            return Content(HttpStatusCode.OK, new { status = "success", data = list });



        }

        // DELETE: api/Teams/5
        [ResponseType(typeof(Team))]
        public IHttpActionResult DeleteTeam(int id)
        {
            Team team = db.Teams.Find(id);
            if (team == null)
            {
                return NotFound();
            }

            db.Teams.Remove(team);
            db.SaveChanges();

            return Ok(team);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TeamExists(int id)
        {
            return db.Teams.Count(e => e.Id == id) > 0;
        }
    }
}