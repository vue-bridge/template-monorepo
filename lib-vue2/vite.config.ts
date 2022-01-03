import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { vueBridge } from "@vue-bridge/vite-plugin";
import { buildConfig } from "../vite.config.shared";

// This is the name of the global you library is accessible in the iife build
// (window.ExampleLibrary)
const libraryGlobalName = "ExampleLibrary";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueBridge({
      vueVersion: "2",
      localizeDeps: true,
    }),
  ],
  resolve: {
    alias: {
      "@vue-bridge/runtime": "@vue-bridge/runtime/vue2",
    },
  },
  build: buildConfig({
    name: libraryGlobalName,
  }),
  test: {
    environment: "jsdom",
  },
});
