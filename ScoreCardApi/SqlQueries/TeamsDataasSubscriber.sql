Select Teams.TeamName,TeamsData.MatchPlayed,TeamsData.Win,
       TeamsData.Loss  from Teams inner join TeamsData
        on (Teams.Id=TeamsData.TeamId)
        where Teams.SubscriberId=19;