import { useState } from 'react'
import Entry from "./Components/Entry";
import emojipedia from "./Components/Emojipedia";
import './App.css'
import Mapping from './Components/Mapping'
import String from './Components/String';


// function createEntry(emojiTerm) {
//   return (
//     <Entry
//       key={emojiTerm.id}
//       emoji={emojiTerm.emoji}
//       name={emojiTerm.name}
//       description={emojiTerm.meaning}
//     />
//   );
// }


function App() {
 
  return (
    <div>
             <h1>
        <span>emojipedia</span>
      </h1>
           <dl className="dictionary">{emojipedia.map( (emojiTerm) => {
                return (
                  
                    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
                  
                )
           })}</dl>

           <Mapping/>

           <String/>
    </ div>
  )
}

export default App
