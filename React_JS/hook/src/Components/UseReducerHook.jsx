import React, { useState, useReducer } from 'react';


function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };

        case 'input':
      return { count: action.payload};

    default:
      return state;
  }
}

function App() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1> UseReducerHook</h1>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button> 
      <br/>
      <input value={state.count} onChange={(e) => dispatch({type: 'input', payload:Number(e.target.value)})} type='number' /> 
    </>
  );
}

export default App;
