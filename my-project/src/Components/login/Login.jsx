import React, { useState } from "react";
import "./login.css";
import img2 from'./img2.png'
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Login Successful");
  };

  return (
    <div className="row g-0 vh-100 justify-content-center align-items-center login-container ">
      <div className="col-10 row g-0 align-items-center login-2">
        <div className="col-lg-6">
          <div className="full">
            {/* <img src="https://i.pinimg.com/736x/38/82/f9/3882f954661d5765f13bf1a8f23ccb18.jpg" className="rounded float-start" alt='lib'/> */}
            <img
            // src="https://i.pinimg.com/564x/ac/73/ce/ac73ce8c23b458ad2bbcf3b5d3ece072.jpg"
             src={img2}
              className="image"
              alt="lib"
            />
          </div>
        </div>
        <form className=" col-6 py-2 px-4">
          <h4 className="login-title display-1 mb-4"><b>Login</b></h4>
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
              <b>remember me</b>
            </label>
          </div>
          {/* <button type="submit" className="login-btn ">Login</button> */}
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
         
            Not REGISTERED ? <a href="/register">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
