import React, { useState } from 'react';
import './Event.css'
function Event() {
  const [headingText, setHeadingText] = useState("Events");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    console.log("Clicked");
    setHeadingText("Submitted");
  }

  function hoverMouseOver() {
    console.log("mouse hover");
    setMouseOver(true);
  }

   function hoverMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
         style = {{backgroundColor: isMouseOver? "black" : "white"}}
        onClick={handleClick}
        onMouseOver={hoverMouseOver}
        onMouseOut={hoverMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default Event;
