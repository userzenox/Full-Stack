import React from 'react'

function PropsCard(props) {
  return (
    <div>
         <h1>{props.name} </h1>
         <img src={props.img} alt='' />
        
         <p> {props.number} </p>
         <p> {props.email}</p>
    </div>
  )
}

export default PropsCard;