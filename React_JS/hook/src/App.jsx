import { useState, useEffect } from 'react'

import './App.css'
import Effect from "./Components/useEffect"
import UseRef from './Components/UseReff'
import UseRef2 from './Components/UseReffAnotherUse'
import UseMemo from './Components/useMemo'

function App() {



  return (
    <>
      <Effect/>
      <hr></hr>
      <br></br>
      <UseRef/>
      <UseRef2/>

      <hr></hr>
      <br></br>
      <UseMemo />
      
    </>
  )
}

export default App
