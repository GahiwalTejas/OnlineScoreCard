import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function FinalScore() {
  debugger;
  const teamsData = useSelector((state) => state.team.teamNames);

   console.log(teamsData);
  // const team1 = {
  //   name: teamsData.team1,
  //   score: teamsData.team1score,
  //   id: teamsData.team1Id,
  // };
  // const team2 = {
  //   name: teamsData.team2,
  //   score: teamsData.team2score,
  //   id: teamsData.team2Id,
    
  // };
  
useEffect(()=>{
  let team1Data = {};
  let team2Data = {};
console.log(teamsData.team1Score)
console.log( teamsData.team2score);
  if(teamsData.team1Score > teamsData.team1Score)
  {
    team1Data= {
      teamId:teamsData.team1Id,
      MatchPlayed:1,
      Win:1,
      Loss:0,
      Tie:0
    }

     team2Data= {
      teamId:teamsData.team2Id,
      MatchPlayed:1,
      Win:0,
      Loss:1,
      Tie:0
    }
  
  }
else if (teamsData.team1Score == teamsData.team1Score){

   team2Data= {
    teamId:teamsData.team2Id,
    MatchPlayed:1,
    Win:1,
    Loss:0,
    Tie:0
  }
   team1Data= {
    teamId:teamsData.team1Id,
    MatchPlayed:1,
    Win:0,
    Loss:1,
    Tie:0
  }
}else{

   team2Data= {
    teamId:teamsData.team2Id,
    MatchPlayed:1,
    Win:0,
    Loss:0,
    Tie:1
  }
   team1Data= {
    teamId:teamsData.team1Id,
    MatchPlayed:1,
    Win:0,
    Loss:0,
    Tie:1
  }



}











const data=[team1Data,team2Data]
fetch('http://localhost:63779/api/TeamsData/teamsData',{
  method: "POST", 
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header
})



},[])

  const result =
    teamsData.team1Score > teamsData.team2Score
      ? teamsData.team1
      : teamsData.team2Score > teamsData.team1Score
      ? teamsData.team2
      : "Tie";

  return (
    <>
      <marquee>
        {" "}
        <div className="font-bold text-5xl  text-white flex text-opacity-25"       >

                    <img 
                    className="mr-2"
           width={"70px"}
           src="https://img.freepik.com/free-vector/winner-gold-trophy-with-red-pleated-badge-rosette-award-realistic-closeup-composition-blurry-light_1284-27888.jpg?w=1060&t=st=1706636628~exp=1706637228~hmac=f3d23fab7b98115b9a08bfe7985d2b640a31a62fc94caffeabbbe68a7c449cb6" alt="winner"></img>

          Final Result :{" "}
          {result === "Tie" ? (
            <h1 className="font-bold text-white mr-2">....Match Tie</h1>
          ) : (
            <h1 className="font-bold text-red-600 ">
              {" "}
          ....{result} is won.
            </h1>
           
          )}
           <img 
           width={"70px"}
           src="https://img.freepik.com/free-vector/winner-gold-trophy-with-red-pleated-badge-rosette-award-realistic-closeup-composition-blurry-light_1284-27888.jpg?w=1060&t=st=1706636628~exp=1706637228~hmac=f3d23fab7b98115b9a08bfe7985d2b640a31a62fc94caffeabbbe68a7c449cb6" alt="winner"></img>
        </div>
      </marquee>

      <div
        className="bg-cover bg-center flex ..."
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/versus-vs-fight-battle-screen-banner_1017-33394.jpg?w=1380&t=st=1706636287~exp=1706636887~hmac=88cf13f6b525d9f25ca0e057fd1aa9e21117a49009a8c6b0d2762cd8948b9aa3')`, 
          width:"100%",
          height:"200%"

         }}
       
      >
        <div className="font-bold text-red-600  text-center text-7xl  " style={{ width: "50%"} }> 
          <p className="">{teamsData.team1}</p>
          <p className="font-bold text-red-600">Score {teamsData.team1Score}</p>
        </div>
        <div className="font-bold text-blue-600 py-20 text-center text-7xl flex-2  " style={{width:"50%"}}>
          <p className="">{teamsData.team2}</p>
          <p className="font-bold text-blue-600">
            Score {teamsData.team2Score}
          </p>
        </div> 
</div>
<div>
   <div
  
  //  style={{
  //         backgroundImage: `url('https://img.freepik.com/free-vector/realistic-award-with-lights-golden-confetti-trophy-with-figurine-holding-star-illustration_1284-55118.jpg?w=1060&t=st=1706636944~exp=1706637544~hmac=6968b9d686140483dd24b9789874417429594f8a6518abb925a39f4efaea128e')`, 
  //         width:"100%",
  //         height:"200%"

  //        }}
         >
        <div className="flex justify-center items-center mt-20 h-20">
        <h1 className="font-bold text-white text-5xl p-2"
         style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/versus-vs-fight-battle-screen-banner_1017-33394.jpg?w=1380&t=st=1706636287~exp=1706636887~hmac=88cf13f6b525d9f25ca0e057fd1aa9e21117a49009a8c6b0d2762cd8948b9aa3')`, 
          
  
           }}>Final Result   </h1>
   
        {result === "Tie" ? (
          <h1 className="font-bold text-red-600 bg-transparent text-7xl"
          style={{
            background: "-webkit-linear-gradient(left, #00f, #f00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "48px", // Adjust font size as needed
            fontWeight: "bold" // Adjust font weight as needed
          }}
          >
            Match Tie..................
          </h1>
        ) : (
          <h1 className="font-bold text-lime-600 border-2 bg-black ml-2 text-4xl flex"
       
       ><img 
                    className="ml-2"
           width={"70px"}
           src="https://img.freepik.com/free-vector/winner-gold-trophy-with-red-pleated-badge-rosette-award-realistic-closeup-composition-blurry-light_1284-27888.jpg?w=1060&t=st=1706636628~exp=1706637228~hmac=f3d23fab7b98115b9a08bfe7985d2b640a31a62fc94caffeabbbe68a7c449cb6" alt="winner"></img>
    
            ...{result} is won.   <img 
                    className="mr-2"
           width={"70px"}
           src="https://img.freepik.com/free-vector/winner-gold-trophy-with-red-pleated-badge-rosette-award-realistic-closeup-composition-blurry-light_1284-27888.jpg?w=1060&t=st=1706636628~exp=1706637228~hmac=f3d23fab7b98115b9a08bfe7985d2b640a31a62fc94caffeabbbe68a7c449cb6" alt="winner"></img>
          </h1>
        )}
        </div>
        </div>
      </div>

    </>
  );
}

export default FinalScore;
