import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-outer-container">
        <main className="login-inner-container">
          <h1>
            Mia<span>Play</span>
          </h1>

          <form className="login-form" name="login-form">
            <input
              className="login-input"
              type="text"
              name="email"
              placeholder="email"
              autoComplete="email"
            />
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="current-password"
            />

            <div className="login-button-container">
              <button className="login-button clickable">
                <i className="bi bi-plus-circle"></i>
              </button>

              <button className="login-button clickable">
                <i className="bi bi-check-circle"></i>
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default Login;
