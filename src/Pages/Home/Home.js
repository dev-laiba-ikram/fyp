import React, { useState } from "react";
import "./Home.css";
import AuthPage from "../Auth/AuthPage";
import { FiSearch, FiUser } from "react-icons/fi";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [authVisible, setAuthVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = (mode = true) => {
    setIsLogin(mode);
    setAuthVisible(true);
  };

  const closeAuth = () => {
    setAuthVisible(false);
  };

  return (
    <div className="home-container">
      <div className="auth-buttons">
        <button className="login-btn" onClick={() => toggleAuth(true)}>
          Login
        </button>
        <button className="signup-btn" onClick={() => toggleAuth(false)}>
          Sign Up
        </button>
        <div className="profile-icon">
          <FiUser />
        </div>
      </div>
      {/* Show AuthPage conditionally */}
      {authVisible && (
        <div className="auth-modal-wrapper">
          <AuthPage isLogin={isLogin} closeAuth={closeAuth} />
        </div>
      )}

      {/* <div className="hero-section">
        <div className="hero-content">
          <h1>Smart Review Analyzer</h1>
          <p class="hero-subtitle">Uncover real customer sentiments across top retailers</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Products Analyzed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Reviews Processed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Accuracy</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="mockup-dashboard"></div>
        </div>
      </div>
       */}
      <div className="search-container">
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
            className="search-input"
          />
          <button className="search-button">Analyze</button>
        </div>
      </div>

      {/* <div className="features-section">
        <div className="feature-card">
          <h3>Sentiment Analysis</h3>
          <p>Understand customer feelings about products</p>
        </div>
        <div className="feature-card">
          <h3>Multi-Source</h3>
          <p>Compare across Amazon, Best Buy, Walmart</p>
        </div>
        <div className="feature-card">
          <h3>Visual Insights</h3>
          <p>Clear graphical representation of data</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
