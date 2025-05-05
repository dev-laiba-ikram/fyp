import "./productCard.css";
import {
  FaShoppingCart,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="container">
      <div className="content">
        <div className="card">
          <div className="card-body">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="card-content">
              {/* <div className="card-header">
                <FaShoppingCart className="cart-icon" />
                <p className="price">{product.price}</p>
              </div> */}

              <h3 className="product-name">{product.name}</h3>
              <p className="description">{product.description}</p>

              <div className="rating">
                {renderStars(product.rating)}
                <span className="rating-value">
                  {product.rating.toFixed(1)}
                </span>
              </div>

              <div className="sentiment-section">
                <p className="sentiment-text positive">
                  🟢 {product.sentimentBreakdown.positive}% Positive
                </p>
                <p className="sentiment-text neutral">
                  🟡 {product.sentimentBreakdown.neutral}% Neutral
                </p>
                <p className="sentiment-text negative">
                  🔴 {product.sentimentBreakdown.negative}% Negative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper to render stars
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} className="star filled" />);
  }

  if (hasHalf) {
    stars.push(<FaStarHalfAlt key="half" className="star half" />);
  }

  while (stars.length < 5) {
    stars.push(
      <FaRegStar key={`empty-${stars.length}`} className="star empty" />
    );
  }

  return stars;
};

export default ProductCard;

// import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { Switch } from "@mui/material";
// import "./productCard.css";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="card">
//       <div className="card-header">
//         <FaShoppingCart className="cart-icon" />
//         <p className="price">{product.price}</p>
//       </div>
//       <h3 className="product-name">{product.name}</h3>
//       <p className="description">{product.description}</p>
//       <div className="sentiment">Sentiment Overview</div>
//       <p className="sentiment-text">{product.sentiment}</p>
//       <div className="trend-switch">
//         <span className="trend-text">Trend</span>
//         <Switch color="primary" />
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
