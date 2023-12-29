--Players Role Wise And Team Wise

Select FirstName,LastName From Players 
inner join Teams On (Teams.Id=Players.TeamId)
where (RoleId=1 Or RoleId=3) and Teams.TeamName='UMumba';
