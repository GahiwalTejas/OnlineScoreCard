import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select2 from '../Select2';
import Button from '../Button';
import Input from '../Input';
import Input2 from '../Input2';
import { useNavigate } from 'react-router-dom';
const PlayerInfo = ({teamId,ButtonText,teamName,navigate}) => {


  debugger
  const { handleSubmit, control } = useForm();
  const options=['Select Role','Raider','All-Rounder','Defender']
  //const teamId=teamId
  const nav=navigate;
  console.log(teamId);
  console.log(nav);
  const navigation=useNavigate();
  const onSubmit = (data) => {
    debugger
    console.log({data})

    
    console.log(data.players[0]);

fetch(`http://localhost:63779/api/Players/PostPlayer/${teamId}`,{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(data.players), 
})
.then((resp)=>navigation(nav))



    // Handle data submission logic here
  };

  return (
<>

<form onSubmit={handleSubmit(onSubmit)}>

<div className='flex w-8/12 ml-24 p-2 bg-red-600 rounded-xl'>
    <label className='basis-1/4  text-white font-bold m-2 ml-10 text-center	 bg-blue-500 rounded-xl inline-block size-auto p-2 '>team  :</label>
<input
          type="text"
          
       className="basis-1/4 m-2 rounded-lg bg-white text-black text-center font-bold outline-none focus:bg-gray-50 duration-200 border border-gray-200"
    //    className={` m-2  w-full ${className}`}

          value={teamName}
          readOnly // Make the input read-only since it is populated from the Redux store
        />


<p className='text-center  font-bold ml-20 py-3'>Add Players</p>   

</div>
        

    {/* A loop ([...Array(7)].map) is used to render form fields for each player  */}
      {[...Array(7)].map((_, index) => (
        <div key={index} className='flex border-4  size-12/12 ' >
          {/* <label>{`Player ${index + 1} First Name:`}</label> */}
          {/* Inside the loop, three sets of fields are rendered for each player: First Name, 
          Last Name, and Role.
           The Controller component from react-hook-form is used to integrate these fields with the form state. */}

{/*The name prop of each Controller is set to an array notation (players[${index}].fieldName)
 to handle the dynamic creation of player fields.
The render prop of each Controller is used to render an input element, and 
the field prop is spread onto the input to connect it to the form state.  */}
          <Controller
            name={`players[${index}].firstName`}
            control={control}
            defaultValue=""
            render={({ field }) => <Input2 {...field}  label={`players No.${index+1} firstName`} />}
          />

          {/* <label>{`Player ${index + 1} Last Name:`}</label> */}
          <Controller
            name={`players[${index}].lastName`}
            control={control}
            defaultValue=""
            render={({ field }) => <Input2 {...field} label={`players No.${index+1} lastName`}
            />}
          />

          {/* <label>{`Player ${index + 1} Role:`}</label> */}
          <Controller
         // label={`Player ${index + 1} Role:`}
            name={`players[${index}].roleId`}
            control={control}
            defaultValue=""
            placeholder={`Select Role`}
           
            render={({ field }) => <Select2 {...field}  options={options} />}
          />
        </div>
      ))}
      <br></br>
      <Button type="submit" className='ml-96'>{ButtonText}</Button>
    </form>











    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    {/* A loop ([...Array(7)].map) is used to render form fields for each player  */}
      {/* {[...Array(7)].map((_, index) => (
        <div key={index} className='flex border-4  size-12/12 ' > */}
          {/* <label>{`Player ${index + 1} First Name:`}</label> */}
          {/* Inside the loop, three sets of fields are rendered for each player: First Name, 
          Last Name, and Role.
           The Controller component from react-hook-form is used to integrate these fields with the form state. */}

{/*The name prop of each Controller is set to an array notation (players[${index}].fieldName)
 to handle the dynamic creation of player fields.
The render prop of each Controller is used to render an input element, and 
the field prop is spread onto the input to connect it to the form state.  */}
          {/* <Controller
            name={`players[${index}].firstName`}
            control={control}
            defaultValue=""
            render={({ field }) => <Input2 {...field} 
            className={'m-2 rounded-lg bg-white text-black font-bold outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'}  label={`players No.${index+1} firstName`} />}
          /> */}

          {/* <label>{`Player ${index + 1} Last Name:`}</label> */}
          {/* <Controller
            name={`players[${index}].lastName`}
            control={control}
            defaultValue=""
            render={({ field }) => <Input2 {...field}  
             className={'m-2 rounded-lg bg-white text-black font-bold outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full'}     label={`players No.${index+1} lastName`}
            />}
          /> */}

          {/* <label>{`Player ${index + 1} Role:`}</label> */}
          {/* <Controller */}
          {/* label={`Player ${index + 1} Role:`}
          name={`players[${index}].roleId`}
            control={control}
            defaultValue=""
            placeholder={`Select Role`}
           
           render={({ field }) => <Select {...field} className={'px-3 py-2 rounded-lg bg-blue-500 text-white  border-4 border-red-500  font-bold outline-none focus:bg-blue-600 duration-200 w-full'} options={options} />}
     />
    </div> */}
      {/* ))}
       <br></br>
       <Button type="submit">{ButtonText}</Button>
     </form> */}
 </>

  );
};

export default PlayerInfo;
