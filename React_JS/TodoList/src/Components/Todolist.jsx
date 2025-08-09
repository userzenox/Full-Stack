import React from 'react'
import { useState } from 'react';



function Todolist(props) {

  return (

    <div onClick={ () => {
         props.onChecked(props.id);
    }}>

         <li  key={props.index}> {props.item}</li>

    </div>
   
  )
}

export default Todolist