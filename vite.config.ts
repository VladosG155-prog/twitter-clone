import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig((props) => {
  const env = loadEnv(props.mode, process.cwd(), "VITE");
  const envWithProcessPrefix = {
    "process.env": `${JSON.stringify(env)}`,
  };

  return {
    define: envWithProcessPrefix,
    plugins: [
      tsconfigPaths(),
      react(),

      svgr({
        svgrOptions: {
          exportType: "default",
        },
        include: "**/*.svg?react",
      }),
      EnvironmentPlugin("all"),
    ],
  };
});
