import React from 'react'
import PlayerScore from '../../components/selectPlayer/PlayerScore'
import { useSelector } from 'react-redux'


function PlayerScorePage2() {
    const navigate='/Raider1'
    const teamsData=useSelector((state)=>state.team.teamNames)
    // const team2Name=teamsData.team2;
    // const prevScore2= teamsData.team2Score;

    console.log(teamsData);

  const team2 = {
    name: teamsData?.team2,
    id: teamsData?.team2Id,
    score: teamsData?.team2Score || 0,
  };


  

  return (
    <div>
<PlayerScore nav={navigate}  teamData={team2}/>
    </div>
  )
}

export default PlayerScorePage2