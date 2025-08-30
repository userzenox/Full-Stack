import { useState, useEffect } from 'react'

import './App.css'
import Effect from "./Components/useEffect"
import UseRef from './Components/UseReff'
import UseRef2 from './Components/UseReffAnotherUse'
import UseMemo from './Components/useMemo'
import UseCallbackHook from './Components/UseCallbackHook'

function App() {



  return (
    <>
      <Effect/>
      <hr></hr>
      
      <UseRef/>
      <UseRef2/>

      <hr></hr>
     
      <UseMemo />
      
      <hr></hr>

      <UseCallbackHook />
    </>
  )
}

export default App
