import React from 'react'
import { useSelector } from 'react-redux'
import { setTeamNames } from '../store/teamSlice';

function PlayerAdd() {

  const teamNames = useSelector((state) => state.team.teamNames);
  console.log({...teamNames});
  console.log({teamNames});
  console.log(teamNames.team1);

  return (<>
      <div>PlayerAdd</div>
      <label>
        Team Name 1:
        <input
          type="text"
          value={teamNames.team1}
          readOnly // Make the input read-only since it is populated from the Redux store
        />
      </label>
      <br />
      <label>
        Team Name 2:
        <input
          type="text"
          value={teamNames.team2}
          readOnly // Make the input read-only since it is populated from the Redux store
        />
      </label>
  </>
  )
}

export default PlayerAdd