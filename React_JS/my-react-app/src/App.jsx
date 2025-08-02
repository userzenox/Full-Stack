
import './App.css'
import Heading from './Components/Heading';
import Timing from './Components/Timing';
import pi from "./Components/Modules"
import { doublepi,triplepi } from './Components/Modules';
import { Fourpi } from './Components/Modules';
const App = () =>{
    return (
      <>
         <Heading/>
      <h2> Greeting v</h2>

        <Timing/>
        <Timing/>
         
         <h3> Value of pie is {pi}</h3>
         <p>  {doublepi()}  </p>
          <h3>  <Fourpi/></h3>
        </>
    )
}

export default App
