
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm({ setExpenses }) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      expenseName,
      amount,
      category,
      date,
    };

    setExpenses((prevExpenses) => [
      ...prevExpenses,
      newExpense,
    ]);

    setExpenseName("");
    setAmount("");
    setCategory("Food");
    setDate("");
  };

  return (
    <form 
      className="expense-form"
      onSubmit={handleSubmit}
    >
      <div  className="form-group">
        <label>Expense Name</label>
        
        <input
          type="text"
          placeholder="Enter expense name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </div>

      

      <div  className="form-group">
        <label>Amount</label>
        
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      

      <div  className="form-group">
        <label>Category</label>
        
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>
      </div>

      

      <div  className="form-group">
        <label>Date</label>
      
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      

      <button 
        className="expense-btn"
        type="submit"
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;