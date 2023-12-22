
Select FirstName,LastName,PlayerRoles.RollType,Teams.TeamName from Players ,PlayerRoles,Teams
where (Players.RoleId=PlayerRoles.Id and Teams.Id=Players.TeamId  and Players.TeamId in(Select Id from Teams where  TeamName='RCB' or TeamName='GL'
))  