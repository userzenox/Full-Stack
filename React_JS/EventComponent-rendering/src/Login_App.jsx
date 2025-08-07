
import './App.css'
import React from "react"
import Login from "./Components/Login"

// function checker(){
//     let check = false;  
   
//    if(check){
//        return (  <div className="container">
//            <h1>Hello , you are loggeg in </h1>
//        </div>)
//    }else{
//          return (

//     <div className="container">
//         <Login/>
//     </div>
//   );
//    }
// }

// function App() {
//   return ( 
//     checker()
//   )

// }

const time = new Date().getHours();
console.log(time);

function App() {
   let check = false;  
  return ( 
      <>
        {  time<4? <h2>Why are you skill working</h2> :   <div className="container">
       { check? <h1> Hello</h1> : <Login/>}  
   </div>}
   
      </>
  )

}

export default App
