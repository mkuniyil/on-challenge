import React, { useState, useEffect } from 'react';
import './ImageTile.scss';

const ImageTile = ({ name, imgPath }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => loadImage(), []);

  const loadImage = () => {
    import(`../../assets/${imgPath}`)
      .then((image) => setImageSrc(image.default))
      .catch(() => setImageSrc(null));
  };

  return (
    <div className="box_tileImageContainer" data-testid="imageTiles">
      <div className="tile_image">
        {imageSrc && <img src={imageSrc} alt={name} />}
      </div>
      <div className="tile_title" data-testid="imageTileTitle">
        {name}
      </div>
    </div>
  );
};

export default ImageTile;
