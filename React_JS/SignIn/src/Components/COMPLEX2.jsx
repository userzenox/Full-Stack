
import React, { useState } from "react";

function COMPLEX2() {
    
 const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
 

  function handlechange(event){
           const { name, value } = event.target;
            setContact(prevValue => {
              return {
        ...prevValue,
        [name]: value
      };
    });
  }
       
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handlechange} placeholder="First Name" />
        <input name="lName" onChange={handlechange} placeholder="Last Name" />
        <input name="email" onChange={handlechange} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default COMPLEX2