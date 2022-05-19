import React, { useState } from "react";
import "./signin.scss";
export default function Signin({ closeModel }) {
  const [signin, setSignIn] = useState(true);
  const [signup, setSignUp] = useState(false);

  const openSignup = (e) => {
    e.preventDefault();
    setSignIn(false);
    setSignUp(true);
  };
  const openSignin = (e) => {
    e.preventDefault();
    setSignIn(true);
    setSignUp(false);
  };

  return (
    <div className="model-background">
      <div className="model-container">
        <button className="closebtn flex" onClick={() => closeModel(false)}>
          X
        </button>
        <div className="item-cred flex">
          {signin ? (
            <div
              id="signin"
              style={{
                borderBottom: ".1rem solid #c0c0c0",

                cursor: "pointer",
                borderColor: "rgba(227, 46, 46, 0.85)",
                color: "rgba(227, 46, 46, 0.85)",
              }}
              onClick={openSignin}
            >
              Sign In
            </div>
          ) : (
            <div
              id="signin"
              style={{
                borderBottom: ".1rem solid #c0c0c0",

                cursor: "pointer",
              }}
              onClick={openSignin}
            >
              Sign In
            </div>
          )}
          {signup ? (
            <div
              id="signup"
              style={{
                borderBottom: ".1rem solid #c0c0c0",

                cursor: "pointer",
                borderColor: "rgba(227, 46, 46, 0.85)",
                color: "rgba(227, 46, 46, 0.85)",
              }}
              onClick={openSignup}
            >
              New Account
            </div>
          ) : (
            <div
              id="signup"
              style={{
                borderBottom: ".1rem solid #c0c0c0",

                cursor: "pointer",
              }}
              onClick={openSignup}
            >
              New Account
            </div>
          )}
        </div>
        {signin && (
          <div className="signin-model-body">
            <div className="model-input flex flex-column">
              <label>Email Or Phone</label>
              <input type="email" placeholder="Enter Your email"></input>
            </div>
            <div className="model-input flex flex-column">
              <label>Password</label>
              <input type="password" placeholder="Enter Password"></input>
            </div>

            <div className="model-input flex flex-column">
              <button className="btn primary"> Sign In</button>
            </div>
            <div
              className="flex flex-column"
              style={{ color: "blue", textAlign: "center", fontSize: "1.3rem" }}
            >
              {" "}
              Forget your password?
            </div>
          </div>
        )}
        {signup && (
          <div className="signin-model-body">
            <div className="model-input flex flex-column">
              <label>Email Or Phone</label>
              <input type="email" placeholder="Enter Your email"></input>
            </div>
            <div className="model-input flex flex-column">
              <label>Password</label>
              <input type="password" placeholder="Create Password"></input>
            </div>
            <div className="model-input flex flex-column">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password"></input>
            </div>
            <div className="model-input flex flex-column">
              <button className="btn primary"> Sign Up</button>
            </div>
            <div
              className="flex flex-column"
              style={{ color: "blue", textAlign: "center", fontSize: "1.3rem" }}
            >
              {" "}
            </div>
          </div>
        )}
        <hr style={{ width: "100%" }}></hr>
        <div className="model-footer flex flex-column flex-center">
          <div>Connect with facebook</div>
          <div> Connect With google</div>
        </div>
      </div>
    </div>
  );
}
