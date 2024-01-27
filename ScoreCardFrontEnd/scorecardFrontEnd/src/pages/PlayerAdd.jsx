import React from 'react'
import { useSelector } from 'react-redux'
import { setTeamNames } from '../store/teamSlice';
import Input from '../components/Input'
function PlayerAdd() {

  const teamNames = useSelector((state) => state.team.teamNames);
  console.log({...teamNames});
  console.log({teamNames});
  console.log(teamNames.team1);

  return (<>
      <div>PlayerAdd</div>   
        <Input
          type="text"
          label={ `Team Name 1:`}
          value={teamNames.team1}
          readOnly // Make the input read-only since it is populated from the Redux store
        />
      <br />

      
     










      
  </>
  )
}

export default PlayerAdd