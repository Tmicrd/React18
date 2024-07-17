import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Tokyo", "Paris", "Sydney", "London"];

  const handleSelectItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
