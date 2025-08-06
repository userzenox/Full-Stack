import React from 'react'

function ExportNote(props) {
  return (
    <div className='note'>
        <h1> {props.title}</h1>
        <p>{ props.content}</p>

    </div>
  )
}

export default ExportNote;