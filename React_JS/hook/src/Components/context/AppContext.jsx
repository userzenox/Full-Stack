import React from 'react'
import { createContext } from 'react'
// 1. Create the context
export const AppContext = createContext();

// 2. Create the provider component
const ContextProvider = ({children}) => {
    const phone = "+91 4563476756"
    const name = "Zenox"

     return (
         <AppContext.Provider value={{phone, name}}>

             {children}
       </AppContext.Provider>
     )  
}

export default ContextProvider
