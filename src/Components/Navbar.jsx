import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/login">Login</Link>{" | "}
      <Link to="/">Home</Link>{" | "}
      <Link to="/add-expense">Add Expense</Link>{" | "}
      <Link to="/statistics">Statistics</Link>{" | "}
      
    </nav>
  );
}

export default Navbar;