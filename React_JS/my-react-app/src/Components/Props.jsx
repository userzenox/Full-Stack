import React from 'react'
import Image from './Image';

function PropsCard(props) {
  return (
    <div>
         
         <h1>{props.name} </h1>
           <Image  img= {props.img}/>
        
         <p> {props.number} </p>
         <p> {props.email}</p>
    </div>
  )
}

export default PropsCard;