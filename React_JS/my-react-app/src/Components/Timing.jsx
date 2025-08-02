
import React from 'react';
import ReactDOM from 'react-dom';

const date = new Date();
console.log(date.getHours());

 const custom = {
         color: "",
         time: ""
    }

if(date.getHours() < 12 && date.getHours() > 0){
   custom.color = "red"
    custom.time = "Morning"
}
else if( date.getHours() < 18  ){
    custom.color = "blue"
    custom.time = "afternoon"
}
else{
      custom.color = "green"
    custom.time = "evening"
}




const Timing = () => {
     return (
       <div>
          <h2 style= {{color: custom.color}}> Good {custom.time} </h2>
       </div>
   )
}


export default Timing;