import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./login.css";
import img2 from "./img2.png";

const socket = socketIOClient("http://localhost:5000");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    socket.on("login_success", (data) => {
      alert("Login Successful");
      console.log(data);
    });

    socket.on("login_error", (data) => {
      alert("Login Failed: " + data.message);
      setShowAlert(true);
      setEmail("");
      setPassword("");
    });

    return () => {
      socket.off("login_success");
      socket.off("login_error");
    };
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    socket.emit("login", { username: email, password: password });
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="row g-0 vh-100 justify-content-center align-items-center login-container">
      <div className="col-10 row g-0 align-items-center login-2">
        <div className="col-lg-6">
          <div className="full">
            <img src={img2} className="image" alt="lib" />
          </div>
        </div>
        <form className=" col-6 py-2 px-4">
          <h4 className="login-title display-1 mb-4">
            <b>Login</b>
          </h4>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              placeholder="zainab@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="/" ><button
             type="button"
            className="bg-stone-200 py-2 login-btn"
            onClick={() => {
              handleLogin();
            }}
          >
            login 
          </button></a>

          <div className="text-center mt-3">
            Not REGISTERED ? <a href="/register">Register</a>
          </div>
        </form>
      </div>
      {showAlert && (
        <div className="alert alert-danger" role="alert" onClick={closeAlert}>
          Login Failed: Incorrect email or password
        </div>
      )}
    </div>
  );
}

export default Login;