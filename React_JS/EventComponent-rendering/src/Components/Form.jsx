import React, { useState } from 'react'

function Form() {

    const [name,setName] = useState("");
    const [clicked, setclick] = useState(false)  

    
     
    function handleChange(event){
           console.log(event.target.value);
           setName(event.target.value)
    }

    function handleClick(){
            setclick("true");
    }


      return (
    <div className="container">
      <h1>Form - {clicked? name: null } </h1>
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?"
      value={name} 
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Form