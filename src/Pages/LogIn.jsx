import React from "react";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { UseLogIn } from "../Hooks/UseLogIn";
export const LogIn = () => {
  const {
    email,
    password,
    passwordVisible,
    handleEmailChange,
    togglePasswordVisibility,
    handleLogin,
    handlePasswordChange,
  } = UseLogIn();

  return (
    <div className="App">
      <div className="container">
        <div className="login-form">
          <h2 className="title">Voting</h2>
          <div className="input-wrapper">
            <div className="input-icon">
              <FaUserAlt />
            </div>
            <input
              value={email}
              onChange={handleEmailChange}
              className="input"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="input-wrapper">
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              className="input"
              value={password}
              onChange={handlePasswordChange}
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
            />
            <div className="toggle-password" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button onClick={handleLogin} className="button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
