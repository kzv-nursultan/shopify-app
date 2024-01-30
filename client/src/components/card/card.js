import React from "react";
import "./card.css"

export const Card = () => {
  return (
    <div class="card">
      <img src="jeans3.jpg" alt="Denim Jeans" style={{ width: "100%" }} />
      <h1>Tailored Jeans</h1>
      <p class="price">$19.99</p>
      <p>Some text about the jeans..</p>
    </div>
  );
};
