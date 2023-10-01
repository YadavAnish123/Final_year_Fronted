import React, { useContext, useEffect } from 'react'
import './App.css';
import DataState from './context/DataState';
import Home from './components/Home';
import Login from './components/Login';
 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <DataState>
         <Home/>
    </DataState>
    // <Router>
    //   <DataState>
    //   <Routes> 
    //   <Route  path='/' element={<Login/>}/> 
    //   </Routes>
    //   </DataState>
    // </Router>
     
    
    );
}

export default App;
