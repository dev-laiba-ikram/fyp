import "./App.css";
import React from "react";
// import ProductCard from "./Pages/productCard";
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ProductCard from "./Pages/productCard.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
