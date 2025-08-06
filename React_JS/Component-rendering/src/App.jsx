
import './App.css'
import React from "react"
import Login from "./Components/Login"
import Register from './Components/Register';

 let isresister = true;  

function App() {
  
  return ( 
      <>
        <div className="container">
          { isresister?   <Login/>:<Register/> }
        </div>
        
   
      </>
  )

}

export default App
