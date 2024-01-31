MERGE INTO TeamsData AS target
USING (VALUES (63, 2, 1, 1, 0)) AS source (TeamId, MatchPlayed, Win, Loss, Tie)
ON target.TeamId = source.TeamId
WHEN MATCHED THEN
    UPDATE SET 
        MatchPlayed = source.MatchPlayed,
        Win = source.Win,
        Loss = source.Loss,
        Tie = source.Tie
WHEN NOT MATCHED THEN
    INSERT (TeamId, MatchPlayed, Win, Loss, Tie)
    VALUES (source.TeamId, source.MatchPlayed, source.Win, source.Loss, source.Tie);

