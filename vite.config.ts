import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: ['subprehensile-informally-brittanie.ngrok-free.dev', 'short-dragons-jog.loca.lt'],
    host: true, // чтобы Vite слушал все интерфейсы (нужно для ngrok)
    port: 5173, // или какой у тебя порт
  },
});