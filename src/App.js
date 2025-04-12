import "./App.css";
import React from "react";
import Navbar from "./Pages/Navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home.js";
import ProductCard from "./Pages/Product/productCard.js";
import AuthPage from "./Pages/Auth/AuthPage.js";
import SignUp from "./Pages/Signup/SignUp";
import Profile from "./Pages/Profile/Profile.js";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <AuthPage /> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductCard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
