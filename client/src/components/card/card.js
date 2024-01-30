import React, { useEffect } from "react";
import "./card.css";

export const Card = ({ title, description, featuredImage, _id }) => {
  useEffect(() => {
    const canvas = document.getElementById(_id);
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = featuredImage.url;
    image.onload = imageLoaded;
    function imageLoaded() {
      ctx.drawImage(image, 0, 0, 290, image.height * (300 / image.width));
    }
  }, [featuredImage.url, _id]);

  return (
    <div className="card">
      <canvas id={_id} width="290px" height="300px" />
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
