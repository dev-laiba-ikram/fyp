import React, { useState } from "react";
import "./Home.css";
import AuthPage from "../Auth/AuthPage";
import { FiSearch, FiUser } from "react-icons/fi";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
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

      <div className="hero-section">
        <div className="hero-content">
          <h1>Smart Review Analyzer</h1>
          <p className="hero-subtitle">
            Transform raw reviews into smart decisions
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>

      <div className="search-container">
        <h2 className="search-heading">
          🔎 Instantly discover what people think about your favorite products
        </h2>
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

      {/* Trending Products Section */}
      <div className="trending-section">
        <h2 className="section-title">🔥 Trending Products</h2>
        <div className="trending-cards">
          <div className="product-card">
            <img src="../../Img/iphone.jpg" alt="Product" />
            <h4>iPhone 15 Pro</h4>
            <p>5,000+ reviews analyzed</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h4>Samsung Galaxy S24</h4>
            <p>4,200+ reviews analyzed</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product" />
            <h4>Dell XPS 13</h4>
            <p>3,800+ reviews analyzed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
