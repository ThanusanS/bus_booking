import React from "react";
import "../App.css";

const AmenityCard = ({ amenity }) => {
  return (
    <div className="amenity-card">
      <div className="amenity-icon">{amenity.icon}</div>
      <h3>{amenity.title}</h3>
      <p>{amenity.desc}</p>
    </div>
  );
};

export default AmenityCard;
