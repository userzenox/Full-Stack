import React from 'react'
import emojipedia from './Emojipedia'

const newEmoji =  emojipedia.map( function (n){
             return n.meaning.substring(0,100) 
          })


function String() {
  return (
    <div>
        {newEmoji.map((str, index) => (
        <h3 key={index}>{str}</h3>
      ))}
         
    </div>
  )
}

export default String