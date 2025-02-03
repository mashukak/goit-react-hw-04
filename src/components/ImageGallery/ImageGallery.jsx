import React from "react";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onSelect={onSelect} />
      ))}
    </ul>
  );
};

export default ImageGallery;
