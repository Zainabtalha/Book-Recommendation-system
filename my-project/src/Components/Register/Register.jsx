import React, { useState } from "react";
import "./Register.css";
import img1 from'./img1.png'


function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleSignup = () => {
    if (!email || !password || !username) {
      alert("Please fill in all fields.");
      return;
    }
    // Perform signup action if all fields are filled
    alert("Signup Successful");
  };

  return (
    <div className="row g-0 vh-100 justify-content-center align-items-center Signup-container">
      <div className="col-10 row g-0 align-items-center Signup-2">
        <div className="col-lg-6">
          <div className="imagbg">
            <img
              src={img1}
              className="rounded float-start image"
              alt="lib"
            />
          </div>
        </div>
        <form className="col-6 py-2 px-4">
          <h4 className="login-title display-1 mb-4">Signup</h4>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              placeholder="zainab@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="Username" className="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="Username"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="Check1" />
            <label className="form-check-label" for="Check1">
              remember me
            </label>
          </div>
          {/* <button type="submit" className="login-btn ">Login</button> */}
          <a href="/login" ><button
             type="button"
            className="bg-stone-200 py-2 login-btn"
            onClick={() => {
              handleSignup();
            }}
          >
            Signup 
          </button></a>

          <div className="text-center mt-3">
         
            Alredy REGISTERED ? <a href="/login">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
