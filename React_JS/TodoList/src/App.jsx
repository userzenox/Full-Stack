import { useState } from 'react'
import Todolist from './Components/Todolist'
import InputArea from './Components/InputArea';
function App() {
    
  
   const [ items,  additem] = useState([]);
 

  
   
   function handleclick(newtodo){
          additem( (prevItems) => {
              return [...prevItems, newtodo];
          });
        
         }
   
   function deleteItem(id){
      additem((prevItems) => {
         return prevItems.filter( (item,index) =>{
             return index !== id
         })        
              })
         }

  
  return (
     <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
         <InputArea onClicking ={handleclick} />
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
