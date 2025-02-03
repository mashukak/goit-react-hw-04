import React from "react";

const ImageCard = ({ image, onSelect }) => {
  return (
    <li onClick={() => onSelect(image.urls.regular)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );
};

export default ImageCard;
