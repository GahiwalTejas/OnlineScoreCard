import React from 'react'
import Raider from '../../components/selectPlayer/Raider'
import { useSelector } from 'react-redux'
function Raider1() {
  const teamsData=useSelector((state)=>state.team.teamNames)
  const team1Id=teamsData.team1Id;
  const team1Name=teamsData.team1;
  const navigate="/PlayerScore1";
  
  return (
    <div>
        <Raider  teamId={team1Id} teamName={team1Name} nav={navigate}/>
    </div>
  )
}

export default Raider1