import React, { useState } from 'react'


function ComplexState() {
       const [fullname, setfullname] = useState({
           fname:"",
           lname:""
       })
      
       function handlechange(event){
              const newValue  = event.target.value;
              const inputName = event.target.name;
            //  console.log(newValue);
            //  console.log(inputName);

             setfullname(prevValue => {
                 console.log(prevValue);
                  if(inputName == "fname") {
                      return {
                           fname: newValue,
                           lname: prevValue.lname
                      }
                  }
                  else if( inputName === "lname"){
                       return {
                            fname: prevValue.fname,
                            lname: newValue
                       }
                  }
             })
             
             
       } 


  return (
     <div className="container">
      <h1>Hello - {fullname.fname} {fullname.lname} </h1>
      <form>
        <input onChange={handlechange}  name="fname" placeholder="First Name" />

        <input onChange={handlechange} name="lname" placeholder="Last Name" />

        <button > Submit </button>
        
      </form>
    </div>
  )
}

export default ComplexState