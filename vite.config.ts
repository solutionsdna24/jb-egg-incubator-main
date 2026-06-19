import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { SPA_STATIC_ROUTES } from "./src/lib/spaRoutes";
import { injectStaticPrerender } from "./src/lib/staticPageHtml";

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
        const indexHtmlPath = path.join(distDir, "index.html");
        if (!fs.existsSync(indexHtmlPath)) return;

        const baseHtml = fs.readFileSync(indexHtmlPath, "utf-8");
        const rootHtml = injectStaticPrerender(baseHtml, "egg-incubators");
        fs.writeFileSync(indexHtmlPath, rootHtml);

        // GitHub Pages / static hosts: 404.html fallback for unknown paths
        fs.writeFileSync(path.join(distDir, "404.html"), rootHtml);

        // Per-route index.html with unique meta + prerendered body for crawlers
        for (const route of SPA_STATIC_ROUTES) {
          const routeDir = path.join(distDir, ...route.split("/"));
          fs.mkdirSync(routeDir, { recursive: true });
          const routeHtml = injectStaticPrerender(baseHtml, route);
          fs.writeFileSync(path.join(routeDir, "index.html"), routeHtml);
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
