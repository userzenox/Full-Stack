
import './App.css'
import React from "react"
import Login from "./Components/Login"
import Register from './Components/Register';
import Event from './Components/Event'
 let isresister = true;  

function App() {
  
  return ( 
      <>
        <div className="container">
          { isresister?   <Login/>:<Register/> }
        </div>

        <Event/>
        
   
      </>
  )

}

export default App
