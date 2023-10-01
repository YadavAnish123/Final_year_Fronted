import React, { useContext, useEffect } from 'react'
import dataContext from '../context/dataContext'
import Login from './Login'
import DataState from '../context/DataState';


const Home=()=> {
  const context = useContext(dataContext)
  const {isLoggedIn,login } = context
  //login();
  
  return (
    
     <div>
      {console.log(isLoggedIn)}
      <Login/>
     </div>
     
  )
}

export default Home