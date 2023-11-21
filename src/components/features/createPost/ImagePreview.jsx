import { useState } from "react";

const ImagePreview = ({ imageSource }) => {
  return <div>{imageSource && <img src={imageSource} alt="Preview" />}</div>;
};
export default ImagePreview;
