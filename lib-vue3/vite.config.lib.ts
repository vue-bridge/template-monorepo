/// <reference types="vite" />
import type { UserConfig } from 'vite'

export interface VueBridgeBuildOptions {
  outDir?: string
  version: 'vue2' | 'vue3'
}

const defaults: VueBridgeBuildOptions = {
  outDir: 'dist',
  version: 'vue3'
}

export const buildConfig = (_options?: VueBridgeBuildOptions): UserConfig["build"] => {
  const options = Object.assign({}, defaults, _options)
  return {
    outDir: options.outDir,
    lib: {
      entry: "src/main.ts",
      formats: ["es", "cjs", "iife"],
      fileName: (format) =>
        `index.${format}.${format === "cjs" ? "cjs" : "js"}`,
    },
    rollupOptions: {
      output: {
        name: "ExampleVueLibrary",
        exports: "named", // this means your main.ts file should only have named exports!
      },
      external: ["vue", "@vue-bridge/runtime"],
    },
  };
};