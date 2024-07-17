import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>Alert</Alert>}
      <Button onClick={() => setShowAlert(true)}>Button</Button>
    </>
  );
}

export default App;
