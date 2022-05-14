import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { buildConfig } from "../vite.config.shared";
import { vueBridge } from "@vue-bridge/vite-plugin";
// This is the name of the global you library is accessible in the iife build (for CDN use)
// (window.ExampleLibrary)
const libraryGlobalName = "ExampleLibrary";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueBridge({
      vueVersion: "3",
    }),
  ],
  resolve: {
    alias: {
      "@vue-bridge/runtime": "@vue-bridge/runtime/vue3",
    },
  },
  build: buildConfig({
    name: libraryGlobalName,
  }),
  test: {
    environment: "jsdom",
  },
});
