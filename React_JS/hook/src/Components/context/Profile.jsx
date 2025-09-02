import React, { useContext } from 'react'
import Contact from '../Contact'
import { AppContext } from './AppContext'

function Profile() {

    const {phone,name} = useContext(AppContext)

  return (
    <div><h1> UseContext Hook </h1>
     <Contact/>
     <h3> Phone:{phone} </h3>
     <h3> Name:{name} </h3>

    </div>
  )
}

export default Profile