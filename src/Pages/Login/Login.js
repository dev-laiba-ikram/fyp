import React, { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaCheckCircle,
} from "react-icons/fa";
import { loginUser } from "../../Connections/Connections"; // ✅ import API function
import "./Login.css";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const Login = ({ toggleMode, closeAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");
    try {
      const data = await loginUser({ email, password });
      console.log("Login success:", data);

      toast.success("User signed In successfully!", {
        style: { background: "#fff", color: "#1ebaaa" },
        progressClassName: "custom-progress-bar",
        icon: <FaCheckCircle style={{ color: "#1ebaaa" }} />,
      });

      closeAuth();
    } catch (err) {
      console.error("Login error:", err);
      // setError(err.message || "Login failed");
      toast.error("SignIn failed. Please try again.", {
        style: { background: "#fff", color: "#f44336" },
        progressClassName: "custom-progress-bar-error",
        iconClassName: "custom-icon-color",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="close-icon" onClick={closeAuth}>
        <FiX size={24} />
      </div>
      <div className="login-left">
        <h2 className="login-title">Sign in to ReviewHub</h2>
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

        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <a href="#" className="login-forgot">
          Forgot your password?
        </a>

        <button
          className="login-button"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </div>

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
