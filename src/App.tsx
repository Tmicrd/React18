import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Tokyo", "Paris", "Sydney", "London"];

  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  );
}

export default App;
