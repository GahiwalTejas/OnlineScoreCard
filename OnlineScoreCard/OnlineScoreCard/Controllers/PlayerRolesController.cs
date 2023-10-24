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
    public class PlayerRolesController : Controller
    {
        private ScoreCardEntities1 db = new ScoreCardEntities1();

        // GET: PlayerRoles
        public ActionResult Index()
        {
            return View(db.PlayerRoles.ToList());
        }

        // GET: PlayerRoles/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PlayerRole playerRole = db.PlayerRoles.Find(id);
            if (playerRole == null)
            {
                return HttpNotFound();
            }
            return View(playerRole);
        }

        // GET: PlayerRoles/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PlayerRoles/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,RollType")] PlayerRole playerRole)
        {
            if (ModelState.IsValid)
            {
                db.PlayerRoles.Add(playerRole);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(playerRole);
        }

        // GET: PlayerRoles/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PlayerRole playerRole = db.PlayerRoles.Find(id);
            if (playerRole == null)
            {
                return HttpNotFound();
            }
            return View(playerRole);
        }

        // POST: PlayerRoles/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,RollType")] PlayerRole playerRole)
        {
            if (ModelState.IsValid)
            {
                db.Entry(playerRole).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(playerRole);
        }

        // GET: PlayerRoles/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PlayerRole playerRole = db.PlayerRoles.Find(id);
            if (playerRole == null)
            {
                return HttpNotFound();
            }
            return View(playerRole);
        }

        // POST: PlayerRoles/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            PlayerRole playerRole = db.PlayerRoles.Find(id);
            db.PlayerRoles.Remove(playerRole);
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
