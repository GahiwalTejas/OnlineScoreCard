import React ,{useState}from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import {useDispatch} from 'react-redux'
import { setTeamNames } from '../store/teamSlice';
function TeamName() {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(" ");
    const navigate = useNavigate();
    const dispatch=useDispatch();




    const onSubmit = async (data) => {
//In backend method parameter are List<Team> teams  so i creating array of object
const teams=[{TeamName:data.Team1},{TeamName:data.Team2}]



dispatch(
  setTeamNames({
    teamNames:{
      team1:data.Team1,
     team2:data.Team2,
    },
  })
);





    console.log(data)
     
      setError("");
      debugger;
      fetch("http://localhost:63779/api/Teams/PostTeam", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(teams), // body data type must match "Content-Type" header
      })
        .then((resp) => resp.text())
        .then((resp) => {
console.log(resp)
            navigate('/playerAdd')
          console.log({ ...resp });
        })
        .catch((err) => {
          console.log(err);
          alert("User Need To Register....");
          navigate("/signup");
        });










    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
    <div className="space-y-5">
      <Input
        label="Team 1 Name: "
        placeholder="Enter your Team 1 Name"
        type="text"
        {...register("Team1", {
          required: true,

        })}
      />
           <Input
        label="Team 2 Name: "
        placeholder="Enter your Team 2 Name"
        type="text"
        {...register("Team2", {
          required: true,

        })}
      />
     
      <Button type="submit" className="w-full">
       Add Teams
      </Button>
    </div>
  </form>

  )
}

export default TeamName