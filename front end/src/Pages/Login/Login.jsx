import { React, useState } from "react";

import axios from "axios";
import { server } from "../../server";

import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

import { Navbar } from "../../containers";
import "./login.css";

const Login = () => {
  //login states
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);

  //sign Up states
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [nameSignup, setNameSignup] = useState("");
  const [errorSignUp, setErrorSignUp] = useState("");
  const [showPasswordSignup, setShowPasswordSignup] = useState(false);

  //Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userToLogin = { emailLogin, passwordLogin };

      const response = await axios.post(`${server}/login`, userToLogin);
      console.log(response.data);
      if (response.data === "no match") {
        console.log(response.data);
        setErrorLogin("Incorrect password");
      } else if (response.data === "fail") {
        console.log(response.data);
        setErrorLogin("Something went wrong");
      } else if (response.data === "no email") {
        console.log(response.data);
        setErrorLogin("This email dosen´t exist");
      } else {
        //expects a authentication token from backend
        console.log("token -->", response.data.token);
        const token = response.data.token;
        const userInfoFromDb = response.data.userInfo;
        console.log("user info -->", userInfoFromDb);

        setEmailLogin("");
        setPasswordLogin("");
      }
    } catch (err) {
      setErrorLogin("Unknown error while loggin in");
      console.log(err, "error loggin in");
    }
  };

  //Sign Up
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${server}/signup`, {
          name: nameSignup,
          email: emailSignup,
          password: passwordSignup,
        })
        .then((res) => {
          //the backend will check for errors before creating user
          if (res.data === "User created") {
            setNameSignup("");
            setEmailSignup("");
            setPasswordSignup("");
          } else if (res.data === "Email already exist") {
            setErrorSignUp("Email already exist");
          }
        });
    } catch (err) {
      setErrorSignUp("Unknown error while signing up");
      console.log(`error creating user`, err);
    }
  };

  return (
    <div className="login">
      <Navbar />
      <div className="login_content">
        <div className="login_content_login">
          <h2>Welcome back</h2>

          <form onSubmit={handleLogin}>
            <lable for="email">Your Email*</lable>
            <input
              type="email"
              name="email"
              required
              onChange={(event) => {
                setEmailLogin(event.target.value);
              }}
            ></input>
            <lable for="pwd"> Your Password*</lable>
            <input
              type={showPasswordLogin ? "text" : "password"}
              name="pwd"
              required
              onChange={(event) => {
                setPasswordLogin(event.target.value);
              }}
            ></input>
            <div className="form-required">* field is required</div>
            <span>{errorLogin && errorLogin}</span>
            <button type="submit">Login</button>
          </form>
        </div>

        <div className="login_content_signup">
          <h2>Join the community</h2>
          <form onSubmit={handleSignup}>
            <lable for="name">Full Name*</lable>
            <input
              type="text"
              name="name"
              required
              onChange={(event) => {
                setNameSignup(event.target.value);
              }}
            ></input>

            <lable for="email">Email address*</lable>
            <input
              type="email"
              name="email"
              required
              onChange={(event) => {
                setEmailSignup(event.target.value);
              }}
            ></input>

            <lable for="pwd">Password*</lable>
            <input
              type={showPasswordSignup ? "text" : "password"}
              name="pwd"
              required
              onChange={(event) => {
                setPasswordSignup(event.target.value);
              }}
            ></input>
            <div className="form-required">* field is required</div>
            <span>{errorSignUp && errorSignUp}</span>
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
