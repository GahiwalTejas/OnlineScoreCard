import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Registration from './components/Registration/Registration.jsx'
import Login from './components/Login/login.jsx'
import RegisterTeam from './components/PlayesrData/RegisterTeam.jsx'


const route=createBrowserRouter([
   
    {
        path:'/',
        element:<Layout/>,
        children:[

            {
                path:"",
                element:<Home/>


            },
            {
               path:"login",
               element:<Login/>,
               children:[
                    {
                         path:"registerTeam",
                         element:<RegisterTeam/>

                    }



               ]


            },

            {
                path:"register",
                element:<Registration/>


            }

        ]

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    
<RouterProvider  router={route}/>

</React.StrictMode>



)
