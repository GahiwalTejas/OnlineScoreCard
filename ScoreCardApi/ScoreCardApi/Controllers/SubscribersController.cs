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
    [RoutePrefix("api/Subscriber")]
    public class SubscribersController : ApiController
    {
        private ScoreCardEntities db = new ScoreCardEntities();

        // GET: api/Subscribers
        public IQueryable<Subscriber> GetSubscribers()
        {
            return db.Subscribers;
        }

        // GET: api/Subscribers/5
        [ResponseType(typeof(Subscriber))]
        public IHttpActionResult GetSubscriber(int id)
        {
            Subscriber subscriber = db.Subscribers.Find(id);
            if (subscriber == null)
            {
                return NotFound();
            }

            return Ok(subscriber);
        }

        // PUT: api/Subscribers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSubscriber(int id, Subscriber subscriber)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subscriber.Id)
            {
                return BadRequest();
            }

            db.Entry(subscriber).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubscriberExists(id))
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
        [Route("Registration")]
        // POST: api/Subscribers
        [ResponseType(typeof(Subscriber))]
        public String Registration([FromBody] Subscriber subscriber)
        {
            if (!ModelState.IsValid)
            {
                return "Invalid Credential";
            }

            db.Subscribers.Add(subscriber);
            if (db.SaveChanges() != 0)
                // return Ok(user);
                return "Registration Successfully";
            else
                return "Invalid Credential";
        }



        [Route("Login")]
        [HttpPost]
        public IHttpActionResult Login([FromBody] Subscriber subscriber)
        {
            var UserBy = (from subscribers in db.Subscribers
                          where subscribers.email == subscriber.email && subscribers.password == subscriber.password
                          select subscribers).FirstOrDefault();

            if (UserBy != null)
            {
                return Ok(UserBy);
            }
            else
            {
                return NotFound();
            }


        }




        // DELETE: api/Subscribers/5
        [ResponseType(typeof(Subscriber))]
        public IHttpActionResult DeleteSubscriber(int id)
        {
            Subscriber subscriber = db.Subscribers.Find(id);
            if (subscriber == null)
            {
                return NotFound();
            }

            db.Subscribers.Remove(subscriber);
            db.SaveChanges();

            return Ok(subscriber);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SubscriberExists(int id)
        {
            return db.Subscribers.Count(e => e.Id == id) > 0;
        }
    }
}