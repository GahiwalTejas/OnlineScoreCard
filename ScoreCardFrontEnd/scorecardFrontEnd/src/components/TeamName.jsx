import React ,{useState}from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Input2 from './Input2';
import Button from './Button';
import {useDispatch,useSelector} from 'react-redux'
import { setTeamNames } from '../store/teamSlice';
function TeamName() {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(" ");
    const navigate = useNavigate();
    const dispatch=useDispatch();

    const userInfo = useSelector((state) => {
      console.log(state);
      console.log(state.auth);
      console.log(state.auth.userData);
      return state.auth.userData;
    });
    console.log(userInfo);
    const id = userInfo.id;

    const onSubmit = async (data) => {
//In backend method parameter are List<Team> teams  so i creating array of object
const teams=[{TeamName:data.Team1},{TeamName:data.Team2}]



// dispatch(
//   setTeamNames({
//     teamNames:{
//       team1:data.Team1,
//      team2:data.Team2,
//     },
//   })
// );





    console.log(data)
     
      setError("");
      debugger;
      fetch(`http://localhost:63779/api/Teams/PostTeam/${id}`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(teams), // body data type must match "Content-Type" header
      })
        .then((resp) => resp.json())
        .then((resp) => {
console.log(resp)

           console.log(resp[0]);
           console.log({resp});
           console.log({...resp})

           
dispatch(
  setTeamNames({
    teamNames:{
      team1:data.Team1,
      team1Id:resp.data[0],
      team1Score:0,
     team2:data.Team2,
     team2Id:resp.data[1],
     team2Score:0,

    },
  })
);   





            navigate('/Team1PlayersInfo')
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
    <div className="space-y-5  w-2/4 ml-60 ">
      <Input2
        label="Team 1 Name: "
        placeholder="Enter your Team 1 Name"
        type="text"
        {...register("Team1", {
          required: true,

        })}
      />
           <Input2
           
        label="Team 2 Name: "
        placeholder="Enter your Team 2 Name"
        type="text"
        {...register("Team2", {
          required: true,

        })}
      />
     
      <Button type="submit" className="w-40 ml-96 ">
       Add Teams
      </Button>
    </div>
  </form>

  )
}

export default TeamName