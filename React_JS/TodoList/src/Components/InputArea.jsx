import React from 'react'
import { useState } from 'react'
function InputArea(props) {
     const [ newtodo, addnewtodo] = useState("");


     function handlechange(event){         
      addnewtodo(event.target.value);         
   }


   return (
    <div className="form">
      <input onChange={handlechange} type="text" value={newtodo} />

      <button onClick={ () => {
            props.onClicking(newtodo);
            addnewtodo("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea