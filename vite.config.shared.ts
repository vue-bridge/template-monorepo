/// <reference types="vite" />
import type { UserConfig } from "vite";

export interface VueBridgeBuildOptions {
  version: "vue2" | "vue3";
  name: string;
  outDir?: string;
}

const defaults: Partial<VueBridgeBuildOptions> = {
  outDir: "dist",
  version: "vue3",
};

export const buildConfig = (
  _options: VueBridgeBuildOptions
): UserConfig["build"] => {
  const options = Object.assign({}, defaults, _options);
  return {
    outDir: options.outDir,
    lib: {
      entry: "src/main.ts",
      formats: ["es", "cjs", "iife"],
      name: options.name, // global variable name for IIFE build
      fileName: (format) =>
        `index.${format}.${format === "cjs" ? "cjs" : "js"}`,
    },
    rollupOptions: {
      output: {
        exports: "named", // this means your main.ts file should only have named exports!
        // Add global names for externalized dependencies here.
        // IIFE needs to now how to access external deps like: `window.Vue`
        globals: {
          vue: "Vue",
          "@vue/composition-api": "VueCompositionAPI",
          "@vue-bridge/runtime": "VueBridge",
        },
      },
      external: ["vue", "@vue-bridge/runtime"],
    },
  };
};
