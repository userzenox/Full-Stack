import React from 'react'
import Image from './Image';

function PropsCard(props) {
  return (
    <div>
         <p> </p>
         <h1>{props.id} . {props.name} </h1>

           <Image  img= {props.img}/>
        
         <p> {props.number} </p>
         <p> {props.email}</p>
    </div>
  )
}

export default PropsCard;