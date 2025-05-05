import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend as BarLegend } from "recharts";

// Sample data for sentiments
const sentimentData = [
  { name: "Positive", value: 45 },
  { name: "Neutral", value: 30 },
  { name: "Negative", value: 25 },
];

// Sample data for reviews per product
const reviewsData = [
  { product: "Product 1", reviews: 120 },
  { product: "Product 2", reviews: 80 },
  { product: "Product 3", reviews: 150 },
  { product: "Product 4", reviews: 200 },
];

const COLORS = ["#2e7d32", "#f9a825", "#c62828"]; // Colors for sentiments

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Product Review Dashboard</h2>

      <div className="charts-container">
        {/* Sentiment Pie Chart */}
        <div className="chart">
          <h3>Review Sentiment Breakdown</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={sentimentData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {sentimentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>

        {/* Reviews per Product Bar Chart */}
        <div className="chart">
          <h3>Number of Reviews per Product</h3>
          <BarChart width={500} height={300} data={reviewsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip />
            <BarLegend />
            <Bar dataKey="reviews" fill="#1ebaaa" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
