import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
  const [signState, setSignState] = useState("Sign Up");

  const handleSignUpNow = () => {
    setSignState("Sign Up");
  };

  const handleSignInNow = () => {
    setSignState("Sign In");
  };

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1> {signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor=""> Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign Up" ? (
            <p>
              Already have an Account?{" "}
              <span onClick={handleSignInNow}>Sign In Now</span>
            </p>
          ) : (
            <p>
              New to Netflix? <span onClick={handleSignUpNow}>Sign Up Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
