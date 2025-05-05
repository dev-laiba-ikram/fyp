import React, { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaUser,
  FaEnvelope,
  FaLock,
  FaCheckCircle, // Add FaCheck for success icon
} from "react-icons/fa";
import { signupUser } from "../../Connections/Connections";
import { toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { FiX } from "react-icons/fi";
import "./SignUp.css";

const Signup = ({ toggleMode, closeAuth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    setIsLoading(true);
    setError("");

    try {
      const data = await signupUser({ name, email, password });
      console.log("Signup success:", data);

      // Success toast
      toast.success("User signed up successfully!", {
        style: { background: "#fff", color: "#1ebaaa" },
        progressClassName: "custom-progress-bar",
        icon: <FaCheckCircle style={{ color: "#1ebaaa" }} />,
      });

      closeAuth(); // Close modal on success
    } catch (err) {
      console.error("Signup error:", err);

      // Error toast
      toast.error("Signup failed. Please try again.", {
        style: { background: "#fff", color: "#f44336" },
        progressClassName: "custom-progress-bar-error",
        iconClassName: "custom-icon-color",
      });

      // setError(err.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="left-section">
        <h2 className="welcome-title">Welcome Back!</h2>
        <p className="welcome-text">
          To keep connected with us please login with your personal info
        </p>
        <button className="signin-button" onClick={toggleMode}>
          Sign In
        </button>
      </div>

      <div className="right-section">
        <h2 className="signup-title">Create Account</h2>

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

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          className="signup-button"
          onClick={handleSignup}
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Signup;
