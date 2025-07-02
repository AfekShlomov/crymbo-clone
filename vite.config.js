import { defineConfig } from "vite";
import { dirname } from "path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    host: "localhost",
    port: 4000,
  },
  root: "src",
  build: {
    minify: false,
    outDir: "../dist",
    emptyOutDir: true,
  },
});
