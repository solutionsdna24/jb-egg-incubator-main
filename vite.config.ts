import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ✅ IMPORTANT: base must be at the top level
export default defineConfig(({ mode }) => ({
  base: "/jb-egg-incubator-main/",

  server: mode === "development" ? {
    host: "::",
    port: 8080,
  } : undefined,

  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
