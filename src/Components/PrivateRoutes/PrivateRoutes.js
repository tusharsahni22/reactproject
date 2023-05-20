import React, { useEffect, useState } from 'react'
import { isLoggedIn } from '../auth'
import { Navigate, Outlet } from 'react-router'

const PrivateRoutes =()=> {
    const [loggedIn,setLoggedIn]=useState(true)
   const handleLoggedIn = ()=>{
    if(isLoggedIn()){
        setLoggedIn(true);
    }
    else setLoggedIn(false)
   }
   useEffect(()=>{
    handleLoggedIn()},[])
  return (<>
    {loggedIn ? <Outlet/> : <Navigate to="/signup"/>}
    
  </>
  )
}

export default PrivateRoutes