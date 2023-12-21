import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Registration() {
  

  const navigate = useNavigate();

const [firstName,setFirstName]=useState('');
const [lastName,setLastName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const saveUser=()=>{
const data={

firstName:firstName,
lastName:lastName,
email:email,
password:password



}
console.log(data)




fetch("http://localhost:63779/api/Subscribers/Registration",{
method :"POST",
headers: {
  "Content-Type": "application/json",
},
body:JSON.stringify(data),
})
.then((res)=>{
  
  const result=res.json();
  console.log(result);
  return result;
}).then((res)=>{
  alert(res);
  console.log("Finally nav To Login")
  navigate("/login")
}
).catch((err)=>alert(err))

}



  return (
    <>
   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     <form className="space-y-6" >

<div>
<label htmlFor="FirstName" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
<div className="mt-2">
<input id="FirstName" name='FirstName'  type="text" placeholder='firstName' onChange={(e)=>{setFirstName(e.target.value) }}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
</div>
</div>

<div>
<label htmlFor="LastName" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
<div className="mt-2">
<input id="LastName"  name='LastName' type="text" placeholder='LastName'  onChange={(e)=>{setLastName(e.target.value)}} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
</div>
</div>


        <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" placeholder='abc@email.com'  autoComplete="email" onChange={(e)=>{setEmail(e.target.value)}}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
    

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
         
        </div>
        <div className="mt-2">
          <input id="password" placeholder='password'     name="password" type="password" autoComplete="current-password"  onChange={(e)=>{setPassword(e.target.value)}}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={saveUser}>Register</button>
      </div>
    </form>
    </div>

 </>
  )
}

export default Registration