import React from "react";
import { Navbar } from "../../containers";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <Navbar />
      <div className="login_content">
        <div className="login_content_login">
          <h2>Welcome back</h2>
          <span>Log in to access your account.</span>
          <form>
            <lable for="email">Your Email</lable>
            <input
              type="email"
              placeholder="  Enter Email"
              name="email"
            ></input>
            <lable for="pwd"> Your Password</lable>
            <input
              type="password"
              placeholder="  Enter Password"
              name="pwd"
            ></input>
            <button type="button">Login</button>
          </form>
        </div>
        <div className="login_content_signup">
          <h2>Join our community</h2>
          <form>
            <lable></lable>
            <input></input>
            <lable></lable>
            <input></input>
            <lable></lable>
            <input></input>
            <lable></lable>
            <input></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
