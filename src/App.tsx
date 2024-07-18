import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const items = ["New York", "Tokyo", "Paris", "Sydney", "London"];

  const onSelectItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  return (
    <>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>Alert</Alert>}
      <Button onClick={() => setShowAlert(true)}>Button</Button>
      <ListGroup items={items} heading="Cities" onSelectItem={onSelectItem} />
    </>
  );
}

export default App;
