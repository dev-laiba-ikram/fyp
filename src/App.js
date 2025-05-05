import "./App.css";
import React from "react";
import Navbar from "./Pages/Navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home.js";
import ProductCard from "./Components/ProductCard.jsx";
import AuthPage from "./Pages/Auth/AuthPage.js";
import SignUp from "./Pages/Signup/SignUp";
import Analytics from "./Pages/Analytics/Analytics.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<ProductCard />} /> */}
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer position="top-right" />
      </div>
    </Router>
  );
}

export default App;
