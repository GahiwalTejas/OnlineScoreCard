import { createSlice } from "@reduxjs/toolkit";


const  initialState={
    teamNames :null,
}

 const teamSlice=createSlice({
    name:"team",
    initialState,
    reducers:{
setTeamNames:(state,action) =>{
    state.teamNames=action.payload.teamNames
},
updateTeamScores: (state, action) => {
  const { team1Score, team2Score } = action.payload;
  // const {team1Score}=action.payload.team1Score;
  // const {team2Score} =action.payload.team2Score;
  state.teamNames = {
    ...state.teamNames,
    team1Score: state.teamNames.team1Score + (team1Score || 0),
    team2Score:state.teamNames.team2Score +  (team2Score || 0),
  };
}
    }
 })


export const {setTeamNames,updateTeamScores}=teamSlice.actions
 export default teamSlice.reducer;