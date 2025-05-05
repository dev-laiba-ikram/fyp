import React, { useState } from "react";
import "./Home.css";
import AuthPage from "../Auth/AuthPage";
import { FiSearch, FiUser } from "react-icons/fi";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import ProductList from "../../Components/ProductList";
import { saveSearchQuery } from "../../Connections/Connections";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [authVisible, setAuthVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const searching = searchQuery.trim().length > 0;

  const toggleAuth = (mode = true) => {
    setIsLogin(mode);
    setAuthVisible(true);
  };

  const closeAuth = () => {
    setAuthVisible(false);
  };
  const dummyProducts = [
    {
      id: 1,
      price: "$999",
      name: "iPhone 14 Pro",
      description: "Latest model with dynamic island and 48MP camera",
      sentimentBreakdown: {
        positive: 80,
        neutral: 15,
        negative: 5,
      },
      image: "/iphone.jpg",
      rating: 4.5,
    },
    {
      id: 1,
      price: "$999",
      name: "iPhone 14 Pro",
      // name: "Macbook",
      description: "Latest model with dynamic island and 48MP camera",
      sentimentBreakdown: {
        positive: 80,
        neutral: 15,
        negative: 5,
      },
      image: "/iphone.jpg",
      rating: 4.5,
    },
    {
      id: 1,
      price: "$999",
      name: "iPhone 14 Pro",
      // name: "Charger",
      description: "Latest model with dynamic island and 48MP camera",
      sentimentBreakdown: {
        positive: 80,
        neutral: 15,
        negative: 5,
      },
      image: "/iphone.jpg",
      rating: 4.5,
    },
  ];

  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const openLogin = () => {
    setIsLogin(true);
    setAuthVisible(true);
  };

  const openSignup = () => {
    setIsLogin(false);
    setAuthVisible(true);
  };

  const handleSearchSubmit = async () => {
    if (searchQuery.trim() === "") return;

    try {
      const userId = "68164e659110ec0c010c07ea"; // 🔥 Hardcoded userId for now

      const data = await saveSearchQuery(userId, searchQuery);
      console.log("Search query saved:", data);
    } catch (error) {
      console.error("Error saving search query:", error);
    }
  };

  return (
    <div className="home-container">
      <div className="auth-buttons">
        <button className="login-btn" onClick={openLogin}>
          Login
        </button>
        <button className="signup-btn" onClick={openSignup}>
          Sign Up
        </button>
        <div className="profile-icon">
          <FiUser />
        </div>
      </div>

      {authVisible && (
        <div className="auth-modal-wrapper">
          <AuthPage isLogin={isLogin} closeAuth={closeAuth} />
        </div>
      )}

      {/* Top search bar if searching */}
      {searching ? (
        <div className="top-search-container">
          <div className="search-wrapper">
            <FiSearch className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="search-input"
            />
            <button className="search-button" onClick={handleSearchSubmit}>
              Analyze
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section - hide on search */}
          <div className="hero-section">
            <div className="hero-content">
              <h1>Smart Review Analyzer</h1>
              <p className="hero-subtitle">
                Transform raw reviews into smart decisions
              </p>
              <button className="cta-button">Get Started</button>
            </div>
          </div>

          {/* Search below hero */}
          <div className="search-container">
            <h2 className="search-heading">
              🔎 Instantly discover what people think about your favorite
              products
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
              <button className="search-button" onClick={handleSearchSubmit}>
                Analyze
              </button>
            </div>
          </div>
        </>
      )}

      {/* Product Results */}
      {searching && <ProductList products={filteredProducts} />}

      {/* Trending Products - show only if not searching */}
      {!searching && (
        <div className="trending-section">
          <h2 className="section-title">🔥 Trending Products</h2>
          <div className="trending-cards">{/* cards here */}</div>
        </div>
      )}
    </div>
  );
};

export default Home;
