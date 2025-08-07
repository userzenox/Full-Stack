import React from 'react'
import { useState } from 'react';
function GetTime() {
   
      let time1 = new  Date().toLocaleTimeString();
// console.log(time1); 

    const [ time, gettime] = useState(time1);

    setInterval( timming, 1000);
       
    function timming() {
       var newtime = new  Date().toLocaleTimeString();
       gettime(newtime);
    }

  return (
    <div className="container">
      <h1>{time}</h1>

      <button onClick={timming}>Get Time</button>

  
      
    </div>
  );
}

export default GetTime




//Challenge:
//1. Given that you can get the current time using:

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
