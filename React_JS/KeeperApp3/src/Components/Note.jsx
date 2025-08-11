import React from "react";

function Note(props) {
   
  function handleclick(event){
    console.log( props.id);
    
    props.ondelete(props.id);
  }
  
  return (
    
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button name={props.title} onClick={handleclick}>DELETE</button>
    </div>
  );
}

export default Note;
