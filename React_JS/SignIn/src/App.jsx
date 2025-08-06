
import Form from "./Components/Form";


const userIsRegistered = false;

function App() {
     return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App
