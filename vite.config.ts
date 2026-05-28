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
    // only load lovable-tagger in dev mode
    mode === "development" &&
      (async () => {
        const { componentTagger } = await import("lovable-tagger");
        return componentTagger();
      })(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false, // disable in prod for smaller output
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // UI & animations
          "vendor-ui": ["framer-motion", "lucide-react", "sonner"],
          // Radix UI components
          "vendor-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-tabs",
            "@radix-ui/react-accordion",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-label",
            "@radix-ui/react-slot",
          ],
          // Forms & validation
          "vendor-forms": [
            "react-hook-form",
            "@hookform/resolvers",
            "zod",
          ],
          // Data & charts
          "vendor-data": [
            "@tanstack/react-query",
            "recharts",
            "date-fns",
          ],
          // Carousel
          "vendor-carousel": ["embla-carousel-react"],
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