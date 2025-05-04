import React, { useEffect, useState } from "react";

const SignupForm = () => {
  useEffect(() => {
    document.title = "Sign in to continue";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.includes("@")) {
      setError("Invalid email! Must contain @ sign!");
    } else if (!email.includes(".com")) {
      setError("Not recognized email domain");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else if (password.length < 6) {
      setError("Password is too short!");
    } else {
      setError("");
      console.log("Correct!");
    }
  };

  return (
    <div className="login-form-parent">
      <div className="register-panel-form">
        <div className="login-panel-flex">
          <img
            className="attlasian-logo"
            src="/images/attlasian-logo.svg"
            alt="attlasian-log"
          />
          <p className="login-to-continue-text">Sign up to continue</p>

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
          <input
            type="password"
            placeholder="Confirm password"
            className="login-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p className="error-text">{error}</p>}

          <button className="continue-button" onClick={handleSubmit}>
            Sign up
          </button>
          <div className="throubleshooting-buttons-flex">
            <button className="cant-login-button">
              Already have an account? Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
