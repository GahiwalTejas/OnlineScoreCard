using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using OnlineScoreCard.Models;

namespace OnlineScoreCard.Controllers
{
    public class TeamsDatasController : Controller
    {
        private ScoreCardEntities1 db = new ScoreCardEntities1();

        // GET: TeamsDatas
        public ActionResult Index()
        {
            var teamsDatas = db.TeamsDatas.Include(t => t.Team);
            return View(teamsDatas.ToList());
        }

        // GET: TeamsDatas/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TeamsData teamsData = db.TeamsDatas.Find(id);
            if (teamsData == null)
            {
                return HttpNotFound();
            }
            return View(teamsData);
        }

        // GET: TeamsDatas/Create
        public ActionResult Create()
        {
            ViewBag.TeamId = new SelectList(db.Teams, "Id", "TeamName");
            return View();
        }

        // POST: TeamsDatas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,MatchPlayed,Win,Loss,TeamId")] TeamsData teamsData)
        {
            if (ModelState.IsValid)
            {
                db.TeamsDatas.Add(teamsData);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.TeamId = new SelectList(db.Teams, "Id", "TeamName", teamsData.TeamId);
            return View(teamsData);
        }

        // GET: TeamsDatas/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TeamsData teamsData = db.TeamsDatas.Find(id);
            if (teamsData == null)
            {
                return HttpNotFound();
            }
            ViewBag.TeamId = new SelectList(db.Teams, "Id", "TeamName", teamsData.TeamId);
            return View(teamsData);
        }

        // POST: TeamsDatas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,MatchPlayed,Win,Loss,TeamId")] TeamsData teamsData)
        {
            if (ModelState.IsValid)
            {
                db.Entry(teamsData).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.TeamId = new SelectList(db.Teams, "Id", "TeamName", teamsData.TeamId);
            return View(teamsData);
        }

        // GET: TeamsDatas/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TeamsData teamsData = db.TeamsDatas.Find(id);
            if (teamsData == null)
            {
                return HttpNotFound();
            }
            return View(teamsData);
        }

        // POST: TeamsDatas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TeamsData teamsData = db.TeamsDatas.Find(id);
            db.TeamsDatas.Remove(teamsData);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
