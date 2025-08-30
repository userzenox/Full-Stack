
import React, { useState, useMemo } from 'react';


function UseMemo() {
 const [number, setNumber] = useState(0);

  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log('Calculation done!');
    return Math.pow(num, 3);
  }

//   const result = cubeNum(number);
  const result = useMemo(()=> {return cubeNum(number)} , [number]);

  return (
    <div>
        <h1> UseMemo </h1>
      <input
        type="number"
        value={number}
        onChange={ (e) => {
             setNumber(e.target.value)
        }}
      />
    
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
      <h2>Cube: {result}</h2>
      <h2>Counter: {counter}</h2>
     </div>
  );
}


export default UseMemo;