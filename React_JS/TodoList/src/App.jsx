import { useState } from 'react'
import Todolist from './Components/Todolist'
function App() {
    
   const [ newtodo, addnewtodo] = useState("");
   const [ items,  additem] = useState([]);
 
   function handlechange(event){         
      addnewtodo(event.target.value);         
   }
   
   function handleclick(){
          additem( (prevItems) => {
              return [...prevItems, newtodo];
          });
        addnewtodo("");
         }
   
   function deleteItem(){
      setItems((prevItems) => {
         return prevItems.filter( (item,index) =>{
             return index !==id
         })        
              })
         }

  
  return (
     <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input  onChange={handlechange} type="text" value={newtodo} />
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map( (item,index) => {
              return  <Todolist key={index} item={item} id={index} onChecked={deleteItem}/>
           })} 
        </ul>
      </div>
    </div>
  )
}

export default App
