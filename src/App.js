import React, { useContext, useEffect } from 'react'
import './App.css';
import DataState from './context/DataState';
import Home from './components/Home';
function App() {
  return (
    
    <DataState>
         <Home/>
    </DataState>
    );
}

export default App;
