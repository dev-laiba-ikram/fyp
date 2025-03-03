import "./productCard.css";
import { FaShoppingCart } from "react-icons/fa";
import { Switch } from "@mui/material";

const products = [
  {
    id: 1,
    price: "$999",
    name: "iPhone 14 Pro - Amazon",
    description: "Latest model with dynamic island and 48MP camera",
    sentiment: "80% Positive | 15% Neutral | 5% Negative",
  },
  {
    id: 2,
    price: "$999",
    name: "iPhone 14 Pro - Best Buy",
    description: "Free next-day delivery available",
    sentiment: "75% Positive | 20% Neutral | 5% Negative",
  },
  {
    id: 3,
    price: "$979",
    name: "iPhone 14 Pro - Walmart",
    description: "Includes 3 months Apple TV+ subscription",
    sentiment: "82% Positive | 13% Neutral | 5% Negative",
  },
];

const ProductCard = () => {
  return (
    <div className="container">
      {/* Main Content */}
      <div className="content">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-bar"
        />

        {/* Filter Options */}
        <div className="filters">
          <button className="active">All Sources</button>
          <button>Amazon</button>
          <button>Best Buy</button>
          <button>Walmart</button>
        </div>

        {/* Product Cards */}
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-header">
              <FaShoppingCart className="cart-icon" />
              <p className="price">{product.price}</p>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="description">{product.description}</p>

            <div className="sentiment">Sentiment Overview</div>
            <p className="sentiment-text">{product.sentiment}</p>
            <div className="trend-switch">
              <span className="trend-text">Trend</span>
              <Switch color="primary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
