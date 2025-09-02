import { useState, useEffect } from 'react'

import './App.css'
import Effect from "./Components/useEffect"
import UseRef from './Components/UseReff'
import UseRef2 from './Components/UseReffAnotherUse'
import UseMemo from './Components/useMemo'
import UseCallbackHook from './Components/UseCallbackHook'
import Contact from './Components/Contact'
import Footer from './Header/Footer'
import Profile from './Components/context/Profile'

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

      <hr></hr>
      <Profile />
      
      <Footer />

      
    </>
  )
}

export default App
