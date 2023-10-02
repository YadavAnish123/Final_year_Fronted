import React, { useContext, useEffect } from 'react'
import dataContext from '../context/dataContext'

const Login=()=> {
  const context = useContext(dataContext)
  const {isLoggedIn,login} = context
  
  //console.log(isLoggedIn);
   
  useEffect(() => {
    // eslint-disable-next-line
    login()
  }, [])

  
  return (

    <div>login
      
    </div>
    
  )
}

export default Login