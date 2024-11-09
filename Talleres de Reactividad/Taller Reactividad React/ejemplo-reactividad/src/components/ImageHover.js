import React, { useState } from 'react';

const ImageHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="image-hover">
      <img
        src={isHovered ? "https://www.nahsvikingsaga.org/wp-content/uploads/2020/11/DEKU.png" : "https://www.cbr.com/wp-content/uploads/2019/12/mirio-face.jpg"}
        alt="Imagen interactiva"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: '300px',
          transition: 'all 0.3s ease'
        }}
      />
    </div>
  );
};

export default ImageHover;