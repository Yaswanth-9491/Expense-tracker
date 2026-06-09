import ExpenseForm from "../Components/ExpenseForm";

function AddExpense({ setExpenses }) {
  return (
    <div className="add-expense-container">
      <h1>Add Expense</h1>

      <ExpenseForm
        setExpenses={setExpenses}
      />
    </div>
  );
}

export default AddExpense;