import { defineConfig } from "vite";
import { getPlugins } from "./vite.plugins";

export default defineConfig({
  server: {
    strictPort: true,
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
    open: true,
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      src: "/src",
    },
  },
  plugins: getPlugins(),
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: "build",
  },
});
