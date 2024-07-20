import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 123.45, category: "Food" },
    { id: 2, description: "Rent", amount: 1000, category: "Home" },
    { id: 3, description: "Gas", amount: 50, category: "Fuel" },
  ]);

  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    />
  );
}

export default App;
