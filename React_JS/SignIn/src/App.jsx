
import Form from "./Components/Form";
import ComplexState from "./Components/ComplexState";
import COMPLEX2 from "./Components/COMPLEX2"
const userIsRegistered = false;

function App() {
     return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
 
      <ComplexState/>
      <COMPLEX2 />
    </div>
  );
}

export default App
