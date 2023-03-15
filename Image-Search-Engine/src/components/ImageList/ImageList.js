import React from "react";
import "./imgs.css";

const ImageList = ({ images }) => {
  const image = images.map((image) => {
    return (
      <img
        src={image.webformatURL}
        key={image.id}
        alt="image"
        className="imgs"
      />
    );
  });

  return (
    <div>
      <div className="imgs-container">{image}</div>
    </div>
  );
};
export default ImageList;
