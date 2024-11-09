import React, { useState } from 'react';

const TextTransform = () => {
  const [text, setText] = useState('');

  const handleBlur = () => {
    setText(text.toUpperCase());
  };

  return (
    <div className="text-transform">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        style={{
          padding: '8px',
          margin: '10px 0',
          width: '200px'
        }}
        placeholder="Escribe algo..."
      />
      <p>Texto transformado: {text}</p>
    </div>
  );
};

export default TextTransform;