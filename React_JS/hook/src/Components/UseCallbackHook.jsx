import React  , {useState }from 'react'
import Header from '../Header/Header.jsx' 
function UseCallbackHook() {

    const [count , setcount] = useState(0);

     const newfn = () => { }
       return (
      <>
        
        <h2>Use Callback hook</h2>
        <Header newFn={newfn }/>
       <h1>{count}</h1>

       <button onClick={()=> setcount(prev=> prev+1)}> Click Here</button>
       

      </>
  )
}

export default UseCallbackHook