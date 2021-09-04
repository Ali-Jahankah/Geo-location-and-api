import React from "react";
import "./photos.css";

export default (props) => {
  const photo = props.getImages.map((image) => {
    const src = image.urls.small;
    return <img src={src}></img>;
  });
  return <div className="photo-div">{photo}</div>;
};
