import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // rutas relativas para que funcione en https://<usuario>.github.io/<repo>/
  base: './',
  plugins: [react()],
  define: {
    // guardo la fecha del build para ver en la web si el despliegue se ha actualizado
    __BUILD_DATE__: JSON.stringify(
      new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })
    ),
  },
});
