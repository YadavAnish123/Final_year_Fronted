import React from 'react'
import dataContext from "./dataContext";
import { useState } from "react";
//import PropTypes from 'prop-types'

const DataState=(props)=> {
const [isLoggedIn, setLoggedIn] = useState(false);
const login = () => setLoggedIn(true);
const logout = () => setLoggedIn(false);
  return (
      <dataContext.Provider value={{ isLoggedIn, login, logout}}>
      {props.children}
    </dataContext.Provider>
     
  )
}
 

export default  DataState