import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import "./SignUp.css";

const Signup = ({ toggleMode }) => {
  return (
    <div className="signup-page">
      {/* Left Section */}
      <div className="left-section">
        <h2 className="welcome-title">Welcome Back!</h2>
        <p className="welcome-text">
          To keep connected with us please login with your personal info
        </p>
        <button className="signin-button" onClick={toggleMode}>
          Sign In
        </button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2 className="signup-title">Create Account</h2>

        {/* Social Icons */}
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

        <p className="email-text">or use your email for registration:</p>

        {/* Signup Form */}
        <form className="signup-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Name" />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" />
          </div>
        </form>

        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
