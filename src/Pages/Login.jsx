import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">
        Login
      </h1>

      <form>
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