import React from "react";
import "./card.css";

export const Card = ({ title, description, featuredImage }) => {
  return (
    <div className="card">
      <img
        src={featuredImage.url}
        alt={featuredImage.altText || title}
        style={{ width: "80%", height: "auto" }}
      />
      <h1>{title}</h1>
      <p className="price">$19.99</p>
      {/* <p>{description}</p> */}
    </div>
  );
};
