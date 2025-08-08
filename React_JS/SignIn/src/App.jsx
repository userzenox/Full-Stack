
import Form from "./Components/Form";
import ComplexState from "./Components/ComplexState";

const userIsRegistered = false;

function App() {
     return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />

      <ComplexState/>
      
    </div>
  );
}

export default App
