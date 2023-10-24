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
    public class PlayersScoresController : Controller
    {
        private ScoreCardEntities1 db = new ScoreCardEntities1();

        // GET: PlayersScores
        public ActionResult Index()
        {
            var playersScores = db.PlayersScores.Include(p => p.Player);
            return View(playersScores.ToList());
        }

        // GET: PlayersScores/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PlayersScore playersScore = db.PlayersScores.Find(id);
            if (playersScore == null)
            {
                return HttpNotFound();
            }
            return View(playersScore);
        }

        // GET: PlayersScores/Create
        public ActionResult Create()
        {
            ViewBag.PlayersId = new SelectList(db.Players, "Id", "FirstName");
            return View();
        }

        // POST: PlayersScores/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Score,PlayersId")] PlayersScore playersScore)
        {
            if (ModelState.IsValid)
            {
                db.PlayersScores.Add(playersScore);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.PlayersId = new SelectList(db.Players, "Id", "FirstName", playersScore.PlayersId);
            return View(playersScore);
        }

        // GET: PlayersScores/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PlayersScore playersScore = db.PlayersScores.Find(id);
            if (playersScore == null)
            {
                return HttpNotFound();
            }
            ViewBag.PlayersId = new SelectList(db.Players, "Id", "FirstName", playersScore.PlayersId);
            return View(playersScore);
        }

        // POST: PlayersScores/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Score,PlayersId")] PlayersScore playersScore)
        {
            if (ModelState.IsValid)
            {
                db.Entry(playersScore).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.PlayersId = new SelectList(db.Players, "Id", "FirstName", playersScore.PlayersId);
            return View(playersScore);
        }

        // GET: PlayersScores/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PlayersScore playersScore = db.PlayersScores.Find(id);
            if (playersScore == null)
            {
                return HttpNotFound();
            }
            return View(playersScore);
        }

        // POST: PlayersScores/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            PlayersScore playersScore = db.PlayersScores.Find(id);
            db.PlayersScores.Remove(playersScore);
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
