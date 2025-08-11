import { useState } from 'react'
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";


function App() {
    
      const [ notearray, setnotearray] = useState([]);

      
    function addnote(newnote){
        console.log(newnote);  
         setnotearray((prevValue) => {
           return [...prevValue , newnote];
         })
    }

    function deletenote(id) {
  setnotearray(prevNotes => {
    return prevNotes.filter((noteitem, index) => index !== id);
  });
}


  return (
     <div>
         <Header/>
        <CreateArea onadd={addnote} />

       { notearray.map((noteitem,index) => {
            return <Note key={index} id={index} title={noteitem.title} content={noteitem.content}  ondelete={deletenote}  />
        })}

     
      <Footer />
     </div>
  )
}

export default App
