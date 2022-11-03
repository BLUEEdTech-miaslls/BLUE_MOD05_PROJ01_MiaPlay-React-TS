import "./Login.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../routers/routes";

const Login = () => {
  const navigate = useNavigate();

  const [showNotice, setShowNotice] = useState<Boolean>(false);

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
              autoComplete="off"
              onSelect={() => setShowNotice(true)}
            />
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
              onSelect={() => setShowNotice(true)}
            />

            <div className="login-button-container">
              <button
                type="button"
                className="login-button clickable"
                onClick={() => setShowNotice(true)}
                onSubmit={(e) => e.preventDefault}
              >
                <i className="bi bi-plus-circle"></i>
              </button>

              <button
                type="button"
                className="login-button clickable"
                onClick={() => navigate(RoutePath.HOME)}
              >
                <i className="bi bi-check-circle"></i>
              </button>
            </div>
          </form>

          {showNotice && (
            <div className="login-notice">
              <div className="login-notice-icon">
                <i className="bi bi-info-circle-fill"></i>
              </div>

              <div className="wrapper">
                <div>
                  login is <b>non-functional.</b>
                </div>
                <span> click </span>
                <span
                  className="clickable"
                  onClick={() => navigate(RoutePath.HOME)}
                >
                  <i className="bi bi-check-circle"></i>
                </span>
                <span> to go </span>
                <span
                  className="clickable"
                  onClick={() => navigate(RoutePath.HOME)}
                >
                  <span> HOME </span>
                </span>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Login;
