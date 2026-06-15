import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",

  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://jb-egg-incubator-main.onrender.com",
        changeOrigin: true,
      },
    },
  },

  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []),
    {
      name: "spa-fallback-and-og-image",
      closeBundle() {
        const distDir = path.resolve(__dirname, "dist");
        const indexHtml = path.join(distDir, "index.html");
        if (fs.existsSync(indexHtml)) {
          fs.copyFileSync(indexHtml, path.join(distDir, "404.html"));
        }
        const ogSource = path.resolve(__dirname, "public/og-image.webp");
        const ogDest = path.join(distDir, "og-image.webp");
        if (fs.existsSync(ogSource)) {
          fs.copyFileSync(ogSource, ogDest);
        }
      },
    },
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "es2018",
    cssCodeSplit: true,
    sourcemap: false,
    minify: "esbuild",
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (
            id.includes("react-dom") ||
            id.includes("react-router") ||
            id.includes("react-helmet-async") ||
            id.includes("/react/") ||
            id.includes("scheduler")
          ) {
            return "react";
          }
          if (id.includes("lucide-react")) return "icons";
          if (id.includes("@radix-ui")) return "radix";
        },
      },
    },
  },
}));
