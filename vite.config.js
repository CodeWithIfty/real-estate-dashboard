import { defineConfig } from "vite";
import postcss from "./postcss.config.js";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  // server: {
  //   host: "192.168.0.111", // Specify the desired host/IP
  //   port: 3000, // Specify the port number
  //   // Other server options can be configured here if needed
  // },
});
