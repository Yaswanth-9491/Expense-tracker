import "./Home.css";

function Home({ expenses, setExpenses }) {

  const totalAmount = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );
  const handleDelete = (indexToDelete) => {
    const updatedExpenses = expenses.filter(
      (_, index) => index !== indexToDelete
    );

    setExpenses(updatedExpenses);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>

      <h2 className="total-card">Total Expenses: ₹{totalAmount}</h2>

      <h2 className="expense-heading">Recent Expenses</h2>

      {expenses.length === 0 ? (
        <p className="no-expenses">No expenses added yet.</p>
      ) : (
        <ul className="expense-list">
          {expenses.map((expense, index) => (
            <li className="expense-item" key={index}>
              <div className="expense-details">
                 <span className="expense-name">
                   {expense.expenseName}
                 </span>

                 <span>
                     ₹{expense.amount}
                 </span>

                 <span>
                   {expense.category}
                 </span>

                 <span>
                     {expense.date}
                 </span>
              </div>
              <button  className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;