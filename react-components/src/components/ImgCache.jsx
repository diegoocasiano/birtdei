import React, { useState, useEffect } from 'react';

const ImageCache = ({ src, alt, ...rest }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      if (!image) {
        const img = new Image();
        img.src = src;
        img.alt = alt;
        img.onload = () => setImage(img);
      }
    };

    loadImage();
  }, [src, alt, image]);

  return image ? <img src={image.src} alt={image.alt} {...rest} /> : null;
};

export default ImageCache;
