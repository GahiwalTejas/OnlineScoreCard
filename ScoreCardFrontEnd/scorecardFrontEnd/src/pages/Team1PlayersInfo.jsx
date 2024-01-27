import React from 'react'
import PlayerInfo from '../components/players/PlayerInfo'
import { useSelector } from 'react-redux'
function Team1PlayersInfo() {

    const teamNames = useSelector((state) => state.team.teamNames);
 const teamId=teamNames.team1Id;
 const teamName=teamNames.team1;
 console.log(teamId);
 console.log({...teamNames})

  return (
   <PlayerInfo  teamId={teamId}  teamName={teamName} ButtonText={'Next'} navigate={'/Team2PlayersInfo'} />
  )
}

export default Team1PlayersInfo