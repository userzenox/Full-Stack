import { useState, useEffect } from 'react'

import './App.css'
import Effect from "./Components/useEffect"
import UseRef from './Components/UseReff'
import UseRef2 from './Components/UseReffAnotherUse'
function App() {


  return (
    <>
      <Effect/>
      <hr></hr>
      <br></br>
      <UseRef/>
      <UseRef2/>
    </>
  )
}

export default App
