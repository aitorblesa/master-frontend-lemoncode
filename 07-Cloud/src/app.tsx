import { useState } from 'react';

export const App = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleIncrementClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Laboratorio Cloud - Lemoncode</h1>
      <p>Esta app está desplegada en GitHub Pages.</p>

      <button onClick={handleIncrementClick}>Púlsame</button>
      <p>Has pulsado {clickCount} veces</p>

      {/* si cambia esta fecha es que el ultimo despliegue ha funcionado */}
      <p>
        <small>Último build: {__BUILD_DATE__}</small>
      </p>
    </main>
  );
};
