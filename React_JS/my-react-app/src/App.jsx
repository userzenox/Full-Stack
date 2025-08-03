
import './App.css'
import Heading from './Components/Heading';
import Timing from './Components/Timing';
import pi from "./Components/Modules"
import { doublepi,triplepi } from './Components/Modules';
import { Fourpi } from './Components/Modules';
import PropsCard from './Components/Props';
import Contact from './Components/Contacts'
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

          <h2> Learning rops</h2>
            <PropsCard  name = "Bharav"  number= "9363676785" email = "gg@gggmail.com"/>
            <PropsCard name = "rimsim"  number= "4325425454" email = "racker@gggmail.com"/>
            <PropsCard name = "player2"  number= "2425245443" email = "gamer234@gggmail.com"/>
            <PropsCard name = {Contact[0].name} img = {Contact[0].imgURL}  number={Contact[0].phone} email={Contact[0].email} />
            <PropsCard name = {Contact[1].name} img = {Contact[1].imgURL} number={Contact[0].phone} email={Contact[0].email} />

            <h2> </h2>
        </>
    )
}

export default App
