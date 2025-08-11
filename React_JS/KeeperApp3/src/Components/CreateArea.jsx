import React from "react";
import { useState } from "react";



function CreateArea(props) {

      const [notes, setNote] = useState({
       title:"",
       content: ""
   })

  function handlechange(event){
       const { name, value } = event.target;

          setNote( prevValue => {
             return {
                ...prevValue,
                [name]: value        
             }
          })        
     }

    function handleclick(event){
          
      props.onadd(notes)
      event.preventDefault();  
      
    }

  return (
    <div>
      <form>
        <input onChange={handlechange} name="title" placeholder="Title" value={notes.title} />

        <textarea onChange={handlechange} name="content" placeholder="Take a note..." rows="3" value={notes.content}/>

        <button onClick={handleclick} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
