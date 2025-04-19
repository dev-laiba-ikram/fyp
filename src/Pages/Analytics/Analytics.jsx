import React, { useState } from "react";
import "./Analytics.css";
import {
  FiSearch,
  FiTrendingUp,
  FiPieChart,
  FiAlertCircle,
  FiThumbsUp,
  FiThumbsDown,
  FiBarChart2,
} from "react-icons/fi";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample dashboard data
  const dashboardData = {
    metrics: {
      products: 42,
      reviews: 12500,
      positive: 68,
      negative: 12,
      neutral: 20,
    },
    trends: [
      { day: "Mon", positive: 65, negative: 15 },
      { day: "Tue", positive: 70, negative: 10 },
      { day: "Wed", positive: 68, negative: 12 },
      { day: "Thu", positive: 72, negative: 8 },
      { day: "Fri", positive: 75, negative: 5 },
    ],
    alerts: [
      { id: 1, product: "iPhone 15", type: "negative spike", change: "+25%" },
      { id: 2, product: "Samsung S24", type: "positive trend", change: "+15%" },
    ],
  };

  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="dashboard-header">
        <h1>Review Analytics Dashboard</h1>
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
          />
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="dashboard-nav">
        <button
          className={`nav-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          <FiTrendingUp /> Overview
        </button>
        <button
          className={`nav-btn ${activeTab === "analysis" ? "active" : ""}`}
          onClick={() => setActiveTab("analysis")}
        >
          <FiPieChart /> Analysis
        </button>
        <button
          className={`nav-btn ${activeTab === "alerts" ? "active" : ""}`}
          onClick={() => setActiveTab("alerts")}
        >
          <FiAlertCircle /> Alerts
        </button>
      </nav>

      {/* Metrics Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Products Tracked</h3>
          <p className="metric-value">{dashboardData.metrics.products}</p>
        </div>
        <div className="metric-card">
          <h3>Total Reviews</h3>
          <p className="metric-value">
            {dashboardData.metrics.reviews.toLocaleString()}
          </p>
        </div>
        <div className="metric-card">
          <h3>Positive</h3>
          <p className="metric-value positive">
            {dashboardData.metrics.positive}%
          </p>
        </div>
        <div className="metric-card">
          <h3>Negative</h3>
          <p className="metric-value negative">
            {dashboardData.metrics.negative}%
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="dashboard-content">
        {activeTab === "overview" && (
          <div className="overview-tab">
            <h2>
              <FiBarChart2 /> Sentiment Trends
            </h2>
            <div className="trend-chart">
              {dashboardData.trends.map((day) => (
                <div key={day.day} className="trend-bar">
                  <div className="bar-label">{day.day}</div>
                  <div className="bar-container">
                    <div
                      className="positive-bar"
                      style={{ height: `${day.positive}%` }}
                    ></div>
                    <div
                      className="negative-bar"
                      style={{ height: `${day.negative}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "analysis" && (
          <div className="analysis-tab">
            <h2>
              <FiPieChart /> Detailed Analysis
            </h2>
            <div className="sentiment-meter">
              <FiThumbsDown className="thumbs-icon" />
              <div className="meter-bar">
                <div
                  className="meter-fill"
                  style={{ width: `${dashboardData.metrics.positive}%` }}
                ></div>
              </div>
              <FiThumbsUp className="thumbs-icon" />
            </div>
          </div>
        )}

        {activeTab === "alerts" && (
          <div className="alerts-tab">
            <h2>
              <FiAlertCircle /> Recent Alerts
            </h2>
            <div className="alerts-list">
              {dashboardData.alerts.map((alert) => (
                <div key={alert.id} className="alert-item">
                  <h4>{alert.product}</h4>
                  <p>
                    {alert.type} ({alert.change})
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
