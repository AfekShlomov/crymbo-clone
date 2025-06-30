import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    host: "localhost",
    port: 4000,
  },
  build: {
    minify: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        "crymbo-connect": resolve(__dirname, 'crymbo-connect.html'),
        developers: resolve(__dirname, 'developers.html'),
        "request-demo": resolve(__dirname, 'request-demo.html')
      },
     output: {
        entryFileNames: '[name].html',
        assetFileNames: 'assets/[name]-[hash][extname]',
      }
    },
  },
});

