import React, { useEffect, useRef, useState } from "react";
import "./card.css";

const drawImage = (_id, url, width) => {
  const canvas = document.getElementById(_id);
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.src = url;
  image.onload = imageLoaded;
  function imageLoaded() {
    ctx.clearRect(0, 0, 290, 300);
    ctx.drawImage(image, 0, 0, width, image.height * (300 / image.width));
  }
};

export const Card = ({ title, description, featuredImage, _id }) => {
  const figureRef = useRef();
  const [width, setWidth] = useState(290);

  const setImgWidth = () => {
    setWidth(figureRef?.current?.offsetWidth - 30);
  };

  useEffect(() => {
    setWidth(figureRef?.current?.offsetWidth - 30);
    window.addEventListener("resize", setImgWidth);
    return () => {
      window.removeEventListener("resize", setImgWidth);
    };
  }, []);

  useEffect(() => {
    drawImage(_id, featuredImage.url, width);
  }, [featuredImage.url, _id, width]);

  return (
    <section className="card">
      <figure ref={figureRef}>
        <canvas id={_id} width="290" height="300px" />
      </figure>
      <div className="info">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};
