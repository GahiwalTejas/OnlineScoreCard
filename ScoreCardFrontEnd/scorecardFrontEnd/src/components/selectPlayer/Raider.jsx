import React, { Children, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select2 from "../Select2";
import Button from "../Button";
function Raider({ teamId, teamName, nav }) {
  console.log(teamId + " " + teamName + " " + " " + nav);

  const navigate = useNavigate();
  const teamsData = useSelector((state) => state.team.teamNames);
  console.log(teamsData.team1);
  const team1Name = teamsData.team1;
  const teamScore1 = teamsData.team1Score;

  const teamScore2 = teamsData.team2Score;
  const team2Name = teamsData.team2;
  //     const team1Id=teamsData.team1Id;
  const [option, setOption] = useState([]);
  const [index, setIndex] = useState([]);

  //   const [team1Score,setTeam1Score]=useState(0);
  //   const team2Score=0;

  useEffect(() => {
    debugger;
    fetch(`http://localhost:63779/api/Players/TeamRaider/${teamId}`, {
      method: "Post",
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        return resp;
      })
      .then((resp) => {
        setOption(
          resp.map((player) => player.FirstName + " " + player.LastName)
        );
        setIndex(resp.map((player) => player.Id));
      })
      .catch((err) => console.log(err));
    console.log(option);
    console.log(index);
  }, []);

  return (
    <>
      {option.length > 0 ? (
        <>
          <div className="flex ml-96 w-2/4 font-bold bg-blue-600 rounded-lg ">
            <p className="p-3 bg-yellow-300 rounded-xl "> ScoreCard </p>
            <label className="basis-1/4  text-white font-bold m-2 ml-10 text-center	 bg-red-500 rounded-xl inline-block size-auto p-2 ">
              {team1Name}{" "}
            </label>
            <input
              type="text"
              className="basis-1/4 m-2 rounded-lg bg-white text-black text-center font-bold outline-none focus:bg-gray-50 duration-200 border border-gray-200"
              //    className={` m-2  w-full ${className}`}

              value={teamScore1}
              readOnly // Make the input read-only since it is populated from the Redux store
            />

            <label className="basis-1/4  text-white font-bold m-2 ml-10 text-center	 bg-black rounded-xl inline-block size-auto p-2 ">
              {team2Name}{" "}
            </label>
            <input
              type="text"
              className="basis-1/4 m-2 rounded-lg bg-white text-black text-center font-bold outline-none focus:bg-gray-50 duration-200 border border-gray-200"
              //    className={` m-2  w-full ${className}`}

              value={teamScore2}
              readOnly // Make the input read-only since it is populated from the Redux store
            />
          </div>
          <div className="font-bold py-10 w-2/4  ml-40">
            <p className=" text-white m-5">Select Raider from {teamName}</p>
            <Select2 options={option} index={index}></Select2>
            <Button className="mt-40" onClick={() => navigate(nav) } children={ Next =>}>
           
          </Button>
          </div>
         
          <br></br> <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
      ) : (
        <>
          <p>Loading.....</p>
        </>
      )}
    </>
  );
}

export default Raider;
