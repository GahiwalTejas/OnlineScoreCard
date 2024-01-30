import React from 'react'
import PlayerScore from '../../components/selectPlayer/PlayerScore'
import { useSelector } from 'react-redux'
function PlayerScorePage1() {
  const navigate='/Raider2'
  const teamsData=useSelector((state)=>state.team.teamNames)
  // const team1Name=teamsData.team1;
  // const prevScore1= teamsData.team1Score;
 console.log(teamsData);


  const team1 = {
    name: teamsData?.team1,
    id: teamsData?.team1Id,
    score: teamsData?.team1Score || 0,
  };
console.log(team1.score);


  return (
    <div className='py-8'>

<PlayerScore nav={navigate} teamData={team1}/>

    </div>
  )
}

export default PlayerScorePage1