import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <>
     {/* <div className='min-h-screen flex flex-wrap content-between bg-gray-400'> */}
     <div className='bg-gradient-to-r from-black via-cyan-600 to-black ...'>

      <div className='w-full block'>
    <Header/>
<br></br>
    <Outlet/>

<br></br>

    <Footer/>
    </div>
    </div>
    
    
    
    
    
    
    </>
  )
}
