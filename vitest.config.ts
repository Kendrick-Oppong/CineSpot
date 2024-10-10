// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import magicalSvg from "vite-plugin-magical-svg";

//now add magicalSvg to the plugins
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    magicalSvg({
      target: "react",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["tests/setupTest.ts"],
  },
});
