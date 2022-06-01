import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./signin.scss";
export default function Signin({ closeModel }) {
  const [signin, setSignIn] = useState(true);
  const [signup, setSignUp] = useState(false);
  const [show, setShow] = useState(true);
  const [modelshow, setModelShow] = useState(true);
  const [otpModel, setotpModel] = useState(false);
  const [forgetModel, setForgetModel] = useState(false);
  const [newpasswordModel, setNewPasswordModel] = useState(false);

  const [forgetotpModel, setForgetOtpModel] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

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

  // open otp model
  const sendotp = (e) => {
    e.preventDefault();
    console.log("bibash");
    setotpModel(true);
    setForgetModel(false);
    setModelShow(false);
    console.log(modelshow, forgetModel, otpModel);
  };
  const sendForgetotp = (e) => {
    e.preventDefault();
    console.log("bibash");
    setForgetOtpModel(true);
    setForgetModel(false);
    setModelShow(false);
    console.log(modelshow, forgetModel, otpModel);
  };
  // const verifysendotp = (e)=>{
  //   e.preventDefault();
  //   setotpModel(true);
  //   setForgetModel(false);
  // }

  // new password model open
  const forgetotpverify = (e) => {
    e.preventDefault();
    setForgetOtpModel(false);
    setNewPasswordModel(true);
  };

  // forget model open
  const forgetRoute = (e) => {
    e.preventDefault();
    setForgetModel(true);
    setModelShow(false);
    console.log(modelshow, forgetModel, otpModel);
  };
  // show and hide password
  const showPassword = (e) => {
    e.preventDefault();
    setShow(false);
    var temp = document.getElementById("typepass");
    if (temp.type === "password") {
      temp.type = "text";
    } else {
      temp.type = "password";
    }
  };
  const hidePassword = (e) => {
    e.preventDefault();
    setShow(true);
    var temp = document.getElementById("typepass");
    if (temp.type === "password") {
      temp.type = "text";
    } else {
      temp.type = "password";
    }
  };

  const usernameHandler = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
    if (username === " ") {
      setErrorMessage("User Name not provided");
    }
  };

  return (
    <div className="model-background">
      {modelshow ? (
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
            <form>
              <div className="signin-model-body">
                <div className="model-input flex flex-column">
                  <label>Email Or Phone</label>
                  <input
                    type="text"
                    onChange={usernameHandler}
                    placeholder="Enter Your email"
                  ></input>
                  {errormessage && (
                    <span style={{ color: "red" }}>{errormessage}</span>
                  )}
                </div>
                <div className="model-input flex flex-column">
                  <label>Password</label>
                  <input
                    type="password"
                    id="typepass"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                  ></input>
                  <div className="show-eye-icon">
                    {show ? (
                      <ion-icon name="eye" onClick={showPassword}></ion-icon>
                    ) : (
                      <ion-icon
                        name="eye-off"
                        onClick={hidePassword}
                      ></ion-icon>
                    )}
                  </div>
                  {errormessage && (
                    <span style={{ color: "red" }}>{errormessage}</span>
                  )}
                </div>

                <div className="model-input flex flex-column">
                  <button className="btn primary"> Sign In</button>
                </div>
                <div
                  className="flex flex-column"
                  style={{
                    color: "blue",
                    textAlign: "center",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                  }}
                  onClick={forgetRoute}
                >
                  {" "}
                  Forget your password?
                </div>
              </div>
            </form>
          )}
          {signup && (
            <form onSubmit={sendotp}>
              <div className="signin-model-body">
                <div className="model-input flex flex-column">
                  <label>Email Or Phone</label>
                  <input
                    type="text"
                    placeholder="Enter Your email"
                    onChange={usernameHandler}
                  ></input>
                  {errormessage && (
                    <span style={{ color: "red" }}>{errormessage}</span>
                  )}
                </div>
                <div className="model-input flex flex-column">
                  <label>Password</label>
                  <input
                    type="password"
                    id="typepass"
                    placeholder="Create Password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <div className="show-eye-icon">
                    {show ? (
                      <ion-icon name="eye" onClick={showPassword}></ion-icon>
                    ) : (
                      <ion-icon
                        name="eye-off"
                        onClick={hidePassword}
                      ></ion-icon>
                    )}
                  </div>
                  {errormessage && (
                    <span style={{ color: "red" }}>{errormessage}</span>
                  )}
                </div>

                <div className="model-input flex flex-column">
                  <button className="btn primary"> Sign Up</button>
                </div>
                <div
                  className="flex flex-column"
                  style={{
                    color: "blue",
                    textAlign: "center",
                    fontSize: "1.3rem",
                  }}
                >
                  {" "}
                </div>
              </div>
            </form>
          )}
          <hr style={{ width: "100%" }}></hr>
          <div className="model-footer flex flex-column flex-center">
            <div>Connect with facebook</div>
            <div> Connect With google</div>
          </div>
        </div>
      ) : forgetModel ? (
        <div className="model-container">
          <button className="closebtn flex" onClick={() => closeModel(false)}>
            X
          </button>
          <div className="model-header flex flex-center">Forget</div>
          <form onSubmit={sendForgetotp}>
            <div className="signin-model-body">
              <div className="model-input flex flex-column">
                <label>Email or Phone</label>
                <input
                  type="text"
                  placeholder=" Enter Email or Phone"
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
                {errormessage && (
                  <span style={{ color: "red" }}>{errormessage}</span>
                )}
              </div>
              <div className="model-input flex flex-column">
                <div className="model-input flex flex-column">
                  <button className="btn primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : otpModel ? (
        <div className="model-container">
          <button className="closebtn flex" onClick={() => closeModel(false)}>
            X
          </button>
          <div className="model-header flex flex-center">OTP Verify</div>
          <form>
            <div className="signin-model-body">
              <div className="model-input flex flex-column">
                <label>OTP Code</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  onChange={usernameHandler}
                ></input>
                {errormessage && (
                  <span style={{ color: "red" }}>{errormessage}</span>
                )}
              </div>
              <div className="model-input flex flex-column">
                <div className="model-input flex flex-column">
                  <button className="btn primary">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : forgetotpModel ? (
        <div className="model-container">
          <button className="closebtn flex" onClick={() => closeModel(false)}>
            X
          </button>
          <div className="model-header flex flex-center">OTP Verify</div>
          <form onSubmit={forgetotpverify}>
            <div className="signin-model-body">
              <div className="model-input flex flex-column">
                <label>OTP Code</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  onChange={usernameHandler}
                ></input>
                {errormessage && (
                  <span style={{ color: "red" }}>{errormessage}</span>
                )}
              </div>
              <div className="model-input flex flex-column">
                <div className="model-input flex flex-column">
                  <button className="btn primary">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : newpasswordModel ? (
        <div className="model-container">
          <button className="closebtn flex" onClick={() => closeModel(false)}>
            X
          </button>
          <div className="model-header flex flex-center">New Password</div>
          <form>
            <div className="signin-model-body">
              <div className="model-input flex flex-column">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter New Password"
                  onChange={usernameHandler}
                ></input>
                {errormessage && (
                  <span style={{ color: "red" }}>{errormessage}</span>
                )}
              </div>
              <div className="model-input flex flex-column">
                <div className="model-input flex flex-column">
                  <button className="btn primary">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
