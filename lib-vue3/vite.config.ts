import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { buildConfig } from "../vite.config.shared";

// This is the name of the global you library is accessibkle in the iife build
// (window.ExampleLibrary)
const libraryGlobalName = "ExampleLibrary";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@vue-bridge/runtime": "@vue-bridge/runtime/vue3",
    },
  },
  build: buildConfig({
    name: libraryGlobalName,
    version: "vue3",
  }),
  test: {
    environment: "jsdom",
  },
});
