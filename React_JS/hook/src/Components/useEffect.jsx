import React from 'react'
import { useState, useEffect } from 'react'


function Effect() {
const [count, setCount] = useState(0)

    useEffect( ()=> {
         setTimeout(()=>{
            setCount( count+1);
         },2000)
    })

  return (
    <>
       <h1> i am using useEffect hook to render this - {count}</h1>
    </>
  )
}


export default Effect