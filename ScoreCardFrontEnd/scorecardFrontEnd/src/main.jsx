import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import store from './store/Store.jsx'
import { Provider } from 'react-redux'
import TeamNamePage from './pages/TeamNamePage.jsx'
import PlayerAdd from './pages/PlayerAdd.jsx'
import Team1PlayersInfo from './pages/Team1PlayersInfo.jsx'
import Team2PlayersInfo from './pages/Team2PlayersInfo.jsx'
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
                element:<LoginPage/>


            },
            {
                path:"signup",
                element:<SignupPage/>


            },
            {
                path:"teamName",
                element:<TeamNamePage/>


            },
            {
                path:"Team1PlayersInfo",
                element:<Team1PlayersInfo/>
            },
            {
                path:"Team2PlayersInfo",
                element:<Team2PlayersInfo/>
            },
           

          

        ]

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Provider store={store}>
<RouterProvider  router={route}/>
</Provider>

</React.StrictMode>



)
