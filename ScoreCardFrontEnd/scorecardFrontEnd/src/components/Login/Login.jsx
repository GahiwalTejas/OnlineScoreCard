import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigateTo = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
const data={
email:email,
pasword:password 
}


const loginFn=()=>{
  console.log(password);
  console.log(data)
 
  
 
fetch('http://localhost:63779/api/Subscribers/Login',{
method:"POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify(data),
})
.then((msg)=>{
  const userInfo= msg.json();
return userInfo
})
.then((resp)=>console.log("fetch complete"+resp))
.then(()=>navigateTo("registerTeam"))
.catch((err)=>{
  alert("Invalid Credentials")
})


}


  return (
   <> 
     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     <form className="space-y-6"  >

        <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" placeholder='abc@email.com'  autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>setEmail(
            e.target.value)}/>
        </div>
      </div>
    

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>    
        </div>
        <div className="mt-2">
          <input id="password" placeholder='password'     name="password" type="text"  onChange={(e)=>setPassword(e.target.value)}  autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={loginFn}>Sign in</button>
      </div>
    </form>
   
   
    </div>
   
   
   
   
    </>
  )
}

export default Login