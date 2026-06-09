function SummaryCard({ title, amount }) {
  return (
    <div className="stat-card">
      <h2>{title}</h2>
      <p>₹{amount}</p>
    </div>
  );
}

export default SummaryCard;