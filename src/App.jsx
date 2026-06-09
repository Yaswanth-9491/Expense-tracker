import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddExpense from "./Pages/AddExpense";
import Statistics from "./Pages/Statistics";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses =
      localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              expenses={expenses}
              setExpenses={setExpenses}
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/add-expense"
          element={
            <AddExpense
              expenses={expenses}
              setExpenses={setExpenses}
            />
          }
        />

        <Route
          path="/statistics"
          element={
            <Statistics expenses={expenses} />
          }
        />
      </Routes>
    </>
  );
}

export default App;