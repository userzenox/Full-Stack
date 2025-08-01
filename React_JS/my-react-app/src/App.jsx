
import './App.css'

const date = new Date(19,1,1,18);
console.log(date.getHours());

 const custom = {
         color: "red",
         time: "Morning"
    }

if(date.getHours() < 12 && date.getHours() > 0){
   custom.color = "red"
    custom.time = "Morning"
}
else if( date.getHours() < 18 && date.getHours()>12 ){
    custom.color = "blue"
    custom.time = "afternoon"
}
else{
      custom.color = "green"
    custom.time = "evening"
}

const Card =() =>{
   return (
       <div>
          <h2 style= {{color: custom.color}}> Good {custom.time} </h2>
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
