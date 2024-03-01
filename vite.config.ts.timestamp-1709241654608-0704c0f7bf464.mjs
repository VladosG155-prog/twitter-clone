// vite.config.ts
import react from "file:///Users/vladislavkolos/Desktop/twitter-clone/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/vladislavkolos/Desktop/twitter-clone/node_modules/vite/dist/node/index.js";
import svgr from "file:///Users/vladislavkolos/Desktop/twitter-clone/node_modules/vite-plugin-svgr/dist/index.js";
import tsconfigPaths from "file:///Users/vladislavkolos/Desktop/twitter-clone/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  define: {
    "process.env": process.env
  },
  server: {
    fs: {
      cachedChecks: false
    }
  },
  plugins: [
    tsconfigPaths(),
    react(),
    svgr({
      svgrOptions: {
        exportType: "default"
      },
      include: "**/*.svg?react"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdmxhZGlzbGF2a29sb3MvRGVza3RvcC90d2l0dGVyLWNsb25lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdmxhZGlzbGF2a29sb3MvRGVza3RvcC90d2l0dGVyLWNsb25lL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy92bGFkaXNsYXZrb2xvcy9EZXNrdG9wL3R3aXR0ZXItY2xvbmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBkZWZpbmU6IHtcbiAgICBcInByb2Nlc3MuZW52XCI6IHByb2Nlc3MuZW52LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBmczoge1xuICAgICAgY2FjaGVkQ2hlY2tzOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdHNjb25maWdQYXRocygpLFxuICAgIHJlYWN0KCksXG4gICAgc3Zncih7XG4gICAgICBzdmdyT3B0aW9uczoge1xuICAgICAgICBleHBvcnRUeXBlOiBcImRlZmF1bHRcIixcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiBcIioqLyouc3ZnP3JlYWN0XCIsXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVQsT0FBTyxXQUFXO0FBQ3JVLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUNqQixPQUFPLG1CQUFtQjtBQUMxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixlQUFlLFFBQVE7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0YsY0FBYztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QsTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsYUFBYTtBQUFBLFFBQ1gsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
