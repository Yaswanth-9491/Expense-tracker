import "./Statistics.css";
import SummaryCard from "../Components/SummaryCard";

function Statistics({ expenses }) {
  const foodTotal = expenses
    .filter((expense) => expense.category === "Food")
    .reduce((sum, expense) => sum + Number(expense.amount), 0);

  const travelTotal = expenses
    .filter((expense) => expense.category === "Travel")
    .reduce((sum, expense) => sum + Number(expense.amount), 0);

  const shoppingTotal = expenses
    .filter((expense) => expense.category === "Shopping")
    .reduce((sum, expense) => sum + Number(expense.amount), 0);

  const entertainmentTotal = expenses
    .filter((expense) => expense.category === "Entertainment")
    .reduce((sum, expense) => sum + Number(expense.amount), 0);

  const otherTotal = expenses
    .filter((expense) => expense.category === "Other")
    .reduce((sum, expense) => sum + Number(expense.amount), 0);

  return (
    <div className="statistics-container">
      <h1 className="statistics-title">
        Expense Statistics
      </h1>

      <div className="stats-grid">
        <SummaryCard
          title="Food"
          amount={foodTotal}
        />

        <SummaryCard
          title="Travel"
          amount={travelTotal}
        />

        <SummaryCard
          title="Shopping"
          amount={shoppingTotal}
        />

        <SummaryCard
          title="Entertainment"
          amount={entertainmentTotal}
        />

        <SummaryCard
          title="Other"
          amount={otherTotal}
        />
      </div>
    </div>
  );
}

export default Statistics;