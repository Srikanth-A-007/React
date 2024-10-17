// C:\Srikanth\React_JS\01basicreact\src\components\Tile.js
import React from 'react';


function Tile({ imageUrl, title }) {
  return (
    <div className="tile">
      <img src={imageUrl} alt={title} className="tile-image" />
      <h3 className="tile-title">{title}</h3>
    </div>
  );
}

export default Tile;
