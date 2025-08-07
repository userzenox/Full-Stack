
import { useState } from "react";
import GetTime from "./Components/GetTime";
import Destructuring from "./Components/Destructuring";

function App() {
   const [count, setCount] = useState(0);
// var count =0;
  
function increase(){
    // count++;
     setCount(count+1);   
}

function decrease(){
     setCount(count-1);
}
  return (
     <>
       <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>

    <GetTime/>

      <Destructuring/>
     </>
      
    

  )
}

export default App
