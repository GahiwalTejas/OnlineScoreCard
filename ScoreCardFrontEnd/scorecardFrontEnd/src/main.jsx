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
import Team1PlayersInfo from './pages/Team1PlayersInfo.jsx'
import Team2PlayersInfo from './pages/Team2PlayersInfo.jsx'
import Raider1 from './pages/raiders/Raider1.jsx'
import Raider2 from './pages/raiders/Raider2.jsx'

import PlayerScorePage1 from './pages/playerScore/PlayerScorePage1.jsx'
import PlayerScorePage2 from './pages/playerScore/PlayerScorePage2.jsx'
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
            {
                path:"Raider1",
                element:<Raider1/>
            },
            {
                path:"Raider2",
                element:<Raider2/>
            },
            {
                path:"PlayerScore1",
                element:<PlayerScorePage1/>
            },
            {
                path:"PlayerScore2",
                element:<PlayerScorePage2/>
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
