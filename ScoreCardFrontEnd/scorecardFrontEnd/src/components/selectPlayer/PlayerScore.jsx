import React, { useEffect, useState } from "react";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTeamScores } from "../../store/teamSlice";

function PlayerScore({ nav, teamData }) {
  debugger;
  //console.log(prevScore);
  console.log(nav);
  console.log(teamData);
  console.log({ ...teamData });
  console.log(teamData.score);
  const scoreboard = teamData.score ?? 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [score, setScore] = useState(scoreboard);
  const teamsData = useSelector((state) => state.team.teamNames);
  const team1Name = teamsData.team1;
  console.log(teamsData.team1);
  // console.log(findTeam);
  //console.log(teamsData.team1Score);

  //const prevScore = scoreboard;

  // useEffect(() => {
  //   console.log(score);

  //   if (team1Name === teamData.name) {
  //     dispatch(updateTeamScores({ team1Score: score }));
  //   } else {
  //     dispatch(updateTeamScores({ team2Score: score }));
  //   }

  // }, [score]);

  // },[score])

  return (
    <>
      <div className="m-5 p-5 ">
        <label className="basis-1/4  text-white font-bold m-2 ml-10 text-center	 bg-blue-500 rounded-xl inline-block size-auto p-2 ">
          team :
        </label>
        <input
          type="text"
          className="basis-1/4 m-2 rounded-lg bg-white text-black text-center font-bold outline-none focus:bg-gray-50 duration-200 border border-gray-200"
          //    className={` m-2  w-full ${className}`}

          value={teamData.name}
          readOnly // Make the input read-only since it is populated from the Redux store
        />
        <p className="font-bold text-white py-8">Select Raider Score....</p>
        <Button
          children={0}
          // onClick={() => setScore( 0)}
          onClick={() => {
            if (team1Name === teamData.name) {
              dispatch(updateTeamScores({ team1Score: 0 }));
              navigate(nav)
            } else {
              dispatch(updateTeamScores({ team2Score: 0 }));
              navigate(nav)
            }
          }}
          className="m-5 w-20"
        ></Button>
        <Button
          children={1}
          //    onClick={() => setScore(1)}
          onClick={() => {
            if (team1Name === teamData.name) {
              dispatch(updateTeamScores({ team1Score: 1 }));
              navigate(nav)
            } else {
              dispatch(updateTeamScores({ team2Score: 1 }));
              navigate(nav)
            }
          }}
          className="m-5 w-20"
        ></Button>
        <Button
          children={2}
          // onClick={() => setScore( 2)}
          onClick={() => {
            if (team1Name === teamData.name) {
              dispatch(updateTeamScores({ team1Score: 2 }));
              navigate(nav)
            } else {
              dispatch(updateTeamScores({ team2Score: 2 }));
              navigate(nav)
            }
          }}
          className="m-5  w-20"
        ></Button>
        <Button
          children={3}
          // onClick={() => setScore(3)}
          onClick={() => {
            if (team1Name === teamData.name) {
              dispatch(updateTeamScores({ team1Score: 3 }));
              navigate(nav)
            } else {
              dispatch(updateTeamScores({ team2Score: 3 }));
              navigate(nav)
            }
          }}
          className="m-5 w-20"
        ></Button>
        <Button
          children={"W"}
          onClick={() => {
            if (team1Name === teamData.name) {
              dispatch(updateTeamScores({ team2Score: 1 }));
              navigate(nav)
            } else {
              dispatch(updateTeamScores({ team1Score: 1 }));
              navigate(nav)
            }
          }}
          className="m-5 bg-red-600 w-20"
        ></Button>

        <Button
          children={"B"}
          className="m-5 bg-green-600 w-20"
          onClick={() => {
            if (team1Name === teamData.name) {
              dispatch(updateTeamScores({ team1Score: 1 }));
              navigate(nav)
            } else {
              dispatch(updateTeamScores({ team2Score: 1 }));
              navigate(nav)
            }
          }}
        ></Button>

        <Button
          children={"B+1"}
          className="m-5 bg-green-600 w-20"
          onClick={() => {
            if (team1Name === teamData.name) {
              dispatch(updateTeamScores({ team1Score: 2 }));
              navigate(nav)
            } else {
              dispatch(updateTeamScores({ team2Score: 2 }));
              navigate(nav)
            }
          }}
        ></Button>
             <Button
          children={"B+2"}
          className="m-5 bg-green-600 w-20"
          onClick={() => {
            if (team1Name === teamData.name) {
              dispatch(updateTeamScores({ team1Score: 3 }));
              navigate(nav)
            } else {
              dispatch(updateTeamScores({ team2Score: 3 }));
              navigate(nav)
            }
          }}
        ></Button>
             <Button
          children={"B+3"}
          className="m-5 bg-green-600 w-20"
          onClick={() => {
            if (team1Name === teamData.name) {
              dispatch(updateTeamScores({ team1Score: 4 }));
              navigate(nav)
            } else {
              dispatch(updateTeamScores({ team2Score: 4 }));
              navigate(nav)
            }
          }}
        ></Button>
            
         <Button
          children={"B+W"}
          className="m-5 bg-green-600 w-20"
          onClick={() => {
            if (team1Name === teamData.name) {
              dispatch(updateTeamScores({ team1Score: 1 }));
              dispatch(updateTeamScores({ team2Score: 1 }));
              navigate(nav)
            } else {
              dispatch(updateTeamScores({ team2Score: 1 }));
              dispatch(updateTeamScores({ team1Score: 1 }));
              navigate(nav)
            }
          }}
        ></Button>


      </div>
      <Button
        children={"Next"}
        onClick={() => navigate(nav)}
        className="m-5 font-bold float-center"
      ></Button>
     
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
    </>
  );
}

export default PlayerScore;
