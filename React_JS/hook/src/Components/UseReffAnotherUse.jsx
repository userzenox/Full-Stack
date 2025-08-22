import React from 'react'
import { useState, useEffect , useRef } from 'react'
 
function UseRef2() {
   const inputElem = useRef();
   
    const btnClicked = () => {
      console.log(inputElem.current);
      inputElem.current.style.background = "blue"
    }

  return (
    <>
      <input type="text"  ref={inputElem}/>
      <button onClick={btnClicked}> Click Here </button>
    </>
  )
}

export default UseRef2