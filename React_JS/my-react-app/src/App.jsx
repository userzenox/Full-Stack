
import './App.css'

const Card =() =>{
   return (
       <div>
          <h2> Card component</h2>
       </div>
   )
}

const App = () =>{
    return (
      <>
      <h2> Functional arrow component</h2>

        <Card/>
        <Card/>
        <Card/>
        </>
    )
}

export default App
