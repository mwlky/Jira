import { useEffect } from "react";
import "../../styles/loginform.css";

const LoginForm = () => {
  useEffect(() => {
    document.title = "Log in to continue";
  }, []);

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
          />

          <input type="text" placeholder="Password" className="login-field" />

          <div className="remember-me-container">
            <input
              type="checkbox"
              id="remember"
              className="remember-me-checkbox"
            />
            <label htmlFor="remember" className="remember-me-text">Remember me</label>
          </div>

          <button className="continue-button">Continue</button>
          <div className="throubleshooting-buttons-flex">
            <button className="cant-login-button">Can't log in?</button>
            <button className="buttons-divider">&bull;</button>
            <button className="create-account-button">Create an account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
