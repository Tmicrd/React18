import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import "bootstrap/dist/css/bootstrap.css";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

export const CATEGORIES = ["Food", "Home", "Fuel"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "groceries", amount: 123.45, category: "Food" },
    { id: 2, description: "rent", amount: 1000, category: "Home" },
    { id: 3, description: "gas", amount: 50, category: "Fuel" },
    { id: 4, description: "dinner", amount: 223.98, category: "Food" },
    { id: 5, description: "party", amount: 176.65, category: "Food" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
