import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // plugins: [react(), dts({ insertTypesEntry: true })],
  // plugins: [react(), dts({ rollupTypes: true })],
  build: {
    // library entry and output settings
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "fgmc-test",
      fileName: "fgmc-test",
    },
    // bundler options
    // externalize react-related imports
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
