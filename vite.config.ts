import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

											   
export default defineConfig(({ mode }) => ({
  
  base: '/', // ✅ Use '/' for local and custom domain

  server: {
    host: '::',
    port: 8080,
    proxy: {
      "/api": {
       // target: "http://localhost:5000",
        target: "https://jb-egg-incubator-main.onrender.com",
        changeOrigin: true,
      },
    },
  },

  plugins: [
    react(),
    ...(mode === 'development' ? [componentTagger()] : []),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: "es2018",
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
}));
