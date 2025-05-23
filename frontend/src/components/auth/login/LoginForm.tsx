import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./loginform.css";

const LoginForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Log in to continue";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleGoToRegister = () => {
    navigate("/register");
  };

  const handleLogIn = async () => {
    if (email.length === 0) {
      setError("Email cannot be empty!");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email format!");
      return;
    }

    if (password.length === 0) {
      setError("Password cannot be empty!");
      return;
    }
    setError("");

    try {
      const API_URL = process.env.REACT_APP_API_URL;

      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
          rememberMe: remember,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
      } else {
        const data = await response.json();
        localStorage.setItem("token", data.token);

        navigate("/board");
      }
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="login-form-parent">
      <div className="login-panel-form">
        <div className="login-panel-flex">
          <img
            className="attlasian-logo"
            src="/images/attlasian-logo.svg"
            alt="attlasian-log"
          />
          <p className="login-to-continue-text">Log in to continue</p>

          <input
            type="text"
            placeholder="Enter your email"
            className="login-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="login-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-me-container">
            <input
              type="checkbox"
              id="remember"
              className="remember-me-checkbox"
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="remember" className="remember-me-text">
              Remember me
            </label>
          </div>

          {error && <p className="error-text">{error}</p>}
          <button className="continue-button" onClick={handleLogIn}>
            Continue
          </button>
          <div className="throubleshooting-buttons-flex">
            <button className="cant-login-button">Can't log in?</button>
            <button className="buttons-divider">&bull;</button>
            <button
              className="create-account-button"
              onClick={handleGoToRegister}
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
