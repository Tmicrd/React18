import { useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";

function App() {
  const [items, setItems] = useState(["product1", "product2"]);

  return (
    <>
      <NavBar itemsCount={items.length} />
      <Cart items={items} onClear={() => setItems([])} />
    </>
  );
}

export default App;
