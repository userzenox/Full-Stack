import React from 'react'
import { useState } from 'react';
function Todolist(props) {
    
    const [isDone, setisDone] = useState(false);

    function handleclick(){
          setisDone(prevValue => {
             return !prevValue;
          })
    }

  return (
    <div onClick={handleclick}>

       <li style={{ textDecoration: isDone? "line-through" :"none" }} key={props.index}> {props.item}</li>

    </div>
   
  )
}

export default Todolist