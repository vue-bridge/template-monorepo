import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { buildConfig } from "../vite.config.shared";
import { dependencies, devDependencies } from "./package.json";

// This is the name of the global you library is accessibkle in the iife build
// (window.ExampleLibrary)
const libraryGlobalName = "ExampleLibrary";

const localResolveDeps = () => {
  const pkgs = [
    ...Object.keys(dependencies ?? {}),
    ...Object.keys(devDependencies ?? {}),
  ];
  const aliases: Record<string, string> = {};
  for (const pkg of pkgs) {
    aliases[pkg] = path.resolve(__dirname, "node_modules", pkg);
  }
  return aliases;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      ...localResolveDeps(),
      "@vue-bridge/runtime": "@vue-bridge/runtime/vue2",
    },
  },
  build: buildConfig({
    version: "vue2",
    name: libraryGlobalName,
    outDir: "../lib-vue3/dist-vue2",
  }),
  test: {
    environment: "jsdom",
  },
});
