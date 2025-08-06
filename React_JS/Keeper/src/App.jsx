import Footer from './Components/Footer';
import Header from './Components/Header';
import './styles.css'
import notes from './Components/Note';
import ExportNote from './Components/ExportNotes';
function App() {
  return (
    <>
      <Header/>

      { 
       notes.map( (n) => {
         return < ExportNote key={n.key} title = {n.title} content={n.content}/>
       })  
      }
      
      <Footer/>
    </>
  );
}

export default App;
