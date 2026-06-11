import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    // lovable-tagger removed - not needed for production
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Force React to be a single instance
    dedupe: ["react", "react-dom", "react-router-dom"],
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React - but ensure they don't duplicate
          if (id.includes("node_modules/react/") || 
              id.includes("node_modules/react-dom/") ||
              id.includes("node_modules/react-router-dom/")) {
            return "vendor-react";
          }
          // UI & animations
          if (id.includes("framer-motion") || 
              id.includes("lucide-react") || 
              id.includes("sonner")) {
            return "vendor-ui";
          }
          // Radix UI components
          if (id.includes("@radix-ui")) {
            return "vendor-radix";
          }
          // Forms & validation
          if (id.includes("react-hook-form") || 
              id.includes("@hookform") || 
              id.includes("zod")) {
            return "vendor-forms";
          }
          // Data & charts
          if (id.includes("@tanstack") || 
              id.includes("recharts") || 
              id.includes("date-fns")) {
            return "vendor-data";
          }
          // Carousel
          if (id.includes("embla-carousel-react")) {
            return "vendor-carousel";
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "@tanstack/react-query",
    ],
  },
}));