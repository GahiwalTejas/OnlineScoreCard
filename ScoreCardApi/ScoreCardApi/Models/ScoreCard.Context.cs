﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ScoreCardApi.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class ScoreCardEntities : DbContext
    {
        public ScoreCardEntities()
            : base("name=ScoreCardEntities")
        {

            this.Configuration.LazyLoadingEnabled = false;

        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<PlayerRole> PlayerRoles { get; set; }
        public virtual DbSet<Player> Players { get; set; }
        public virtual DbSet<PlayersScore> PlayersScores { get; set; }
        public virtual DbSet<Subscriber> Subscribers { get; set; }
        public virtual DbSet<Team> Teams { get; set; }
        public virtual DbSet<TeamsData> TeamsDatas { get; set; }
    }
}
