import React from 'react'
import dataContext from "./dataContext";
import { useState } from "react";
//import PropTypes from 'prop-types'

const DataState=(props)=> {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");
const [isLoggedIn, setLoggedIn] = useState(false);
const login = () => setLoggedIn(true);
const logout = () => setLoggedIn(false);
  return (
      <dataContext.Provider value={{ isLoggedIn, login, logout,name,email,phone,setName,setEmail,setPhone,password, setPassword}}>
      {props.children}
    </dataContext.Provider>
     
  )
}
 

export default  DataState