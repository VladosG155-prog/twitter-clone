import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  server: {
    fs: {
      cachedChecks: false,
    },
  },
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      svgrOptions: {
        exportType: "default",
      },
      include: "**/*.svg?react",
    }),
  ],
});
