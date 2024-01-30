import React from 'react'
import PlayerInfo from '../components/players/PlayerInfo'
import { useSelector } from 'react-redux'
function Team2PlayersInfo() {

//     const teamNames = useSelector((state) => state.team.teamNames);
//  const teamId=teamNames.team2Id;
//  const teamName=teamNames.team2;
//  console.log(teamId);
//  console.log({...teamNames})


const teamNames = useSelector((state) => state.team.teamNames);
const teamId=teamNames.team2Id;
const teamName=teamNames.team2;
console.log(teamId);
console.log({...teamNames})

  return (
   <PlayerInfo  teamId={teamId}  teamName={teamName} ButtonText={'Submit'} navigate={'/Raider1'} />
  )
}

export default Team2PlayersInfo