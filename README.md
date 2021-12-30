# Vue-Bridge Library Template

Congrats!

> Documentation: https://www.vue-bridge.dev

## Features

*  Build, Test and Publish a component library for both Vue 2 and Vue 3 from **one* codebase
* Typescript
* Linting with Eslint 8
* Unit-Tests with [Vitest](https://vitest.dev)
* _TODO_: E2E Tests with Cypress
* Bundling and local dev with [Vite](https://vitejs.dev)
* Interoperability supported by the `@vue-bridge/*` packages:
  * `@vue-bridge/eslint-config` : eslint rules that support you in writing interoperable code
  * `@vue-bridge/runtime`       : tiny runtime enhancements for interoperability between Vue 2 and  Vue 3
  * `@vue-bridge/testing`       : Harmonized API for `@vue/test-utils` versions `1` and `2`

## Getting Started

Make sure to go through this list to have a smooth start. 
We recommend starting with the docs at `https://vue-bridge.dev`, but you can also dive right into this repo and come back to the docs whenever you need them.


- [ ] Install dependencies by running `pnpm i`. Not using pnpm yet? Get started at https://pnpm.io
- [ ] Give this monorepo a proper name, description and your author details (`/package.json`)
- [ ] Give your packages a proper name, description and your author details (`/lib-vueX/package.json`)
- [ ] give your package a real Global Name in each `vite.config.ts` (look for the `libraryGlobalName` - it should be the **same** in both configs)
- [ ] Add your name to the LICENSE files in the root folder as well as the package folders (`/lib-*`)
- [ ] Run `pnpm build-all` and inspect the build output in `/lib-vue3/dist(-vue2)`. Take a look at the package exports to get a picture of what's being exported by your package.