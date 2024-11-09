import React, { useState } from 'react';

const FontSizeControl = () => {
  const [fontSize, setFontSize] = useState(16);
  const MIN_SIZE = 16;
  const MAX_SIZE = 32;

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, MAX_SIZE));
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, MIN_SIZE));
  };

  return (
    <div className="font-size-control">
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={increaseFontSize}
          disabled={fontSize >= MAX_SIZE}
          style={{
            padding: '8px 16px',
            marginRight: '10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Aumentar tamaño
        </button>
        <button
          onClick={decreaseFontSize}
          disabled={fontSize <= MIN_SIZE}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Disminuir tamaño
        </button>
      </div>
      <h1 style={{ fontSize: `${fontSize}px`, transition: 'font-size 0.3s ease' }}>
        Texto de ejemplo
      </h1>
      <p>Tamaño actual: {fontSize}px</p>
    </div>
  );
};

export default FontSizeControl;