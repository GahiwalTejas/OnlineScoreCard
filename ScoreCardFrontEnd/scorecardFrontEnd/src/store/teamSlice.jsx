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
}
    }
 })


export const {setTeamNames}=teamSlice.actions
 export default teamSlice.reducer;