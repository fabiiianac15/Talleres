import React from 'react';
import Counter from './components/Counter';
import TextTransform from './components/TextTransform';
import ImageHover from './components/ImageHover';
import FontSizeControl from './components/FontSizeControl';
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Ejercicios de Reactividad con React</h1>

      <section style={{ marginBottom: '30px' }}>
        <h2>1. Contador</h2>
        <Counter />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>2. Transformación de Texto</h2>
        <TextTransform />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>3. Imagen Interactiva</h2>
        <ImageHover />
      </section>

      <section style={{ marginBottom: '30px' }}>
        <h2>4. Control de Tamaño de Texto</h2>
        <FontSizeControl />
      </section>
    </div>
  );
}

export default App;