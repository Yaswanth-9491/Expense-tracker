import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div className="login-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
          />
        </div>

        <div className="login-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
          />
        </div>

        <button
          className="login-btn"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;