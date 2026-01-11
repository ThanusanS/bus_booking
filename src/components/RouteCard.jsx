import React from "react";
import "../App.css";

const RouteCard = ({ route }) => {
  return (
    <div className="route-card">
      <div className="route-info">
        <h3>
          {route.from} → {route.to}
        </h3>
        <p className="route-duration">Duration: {route.duration}</p>
      </div>
      <div className="route-price">
        <span className="price">{route.price}</span>
        <button className="select-btn">Select</button>
      </div>
    </div>
  );
};

export default RouteCard;
