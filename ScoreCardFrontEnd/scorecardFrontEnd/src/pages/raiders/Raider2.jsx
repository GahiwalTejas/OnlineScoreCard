import React from 'react'
import Raider from '../../components/selectPlayer/Raider'
import { useSelector } from 'react-redux'

function Raider2() {
    const teamsData=useSelector((state)=>state.team.teamNames)
    const team2id=teamsData.team2Id;
    const team2Name=teamsData.team2;
    const navigate="/PlayerScore2";
    

  return (
    <Raider teamId={team2id} teamName={team2Name} nav={navigate}/>
  )
}

export default Raider2