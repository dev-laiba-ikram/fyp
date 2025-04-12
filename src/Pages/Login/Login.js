import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./Login.css";

const Login = ({ toggleMode }) => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h2 className="login-title">Sign in to Diprella</h2>

        <div className="social-icons">
          <button className="social-button">
            <FaFacebookF />
          </button>
          <button className="social-button">
            <FaGoogle />
          </button>
          <button className="social-button">
            <FaLinkedinIn />
          </button>
        </div>

        <p className="login-text">or use your email account:</p>

        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />

        <a href="#" className="login-forgot">
          Forgot your password?
        </a>

        <button className="login-button">Login</button>
      </div>

      {/* Right Section (Signup) */}
      <div className="login-right">
        <h2 className="login-title">Hello, Friend!</h2>
        <p className="login-text">
          Enter your personal details and start your journey with us
        </p>
        <button className="login-signup" onClick={toggleMode}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Login;
