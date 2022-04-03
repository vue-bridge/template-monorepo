# Vue-Bridge Library Template

Congrats!

> Documentation will be found at https://www.vue-bridge.dev someday in the not too distance future

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
- [ ] give your package a real global Name in each `vite.config.ts` (look for the `libraryGlobalName` - it should be the **same** in both configs)
- [ ] Add your name to the LICENSE files in the root folder as well as the package folders (`/lib-*`)
- [ ] Add your name as the `"author"` in the root `package.json` as well as in both `/lib-` folders
- [ ] Run `pnpm build-all` and inspect the build output in `/lib-vue{2,3}/dist`. Take a look at the package exports defined in `package.json` to get a picture of what's being exported by your package.

## Commands

These are the commands you can run from the project root. you can find them in the root `package.json` most of them are just convenience commands running scripts in both packages (`/lib-vue2` && `/lib-vue3`)

### `pnpm run dev-vue2` / `pnpm run dev-vue3`:

Start a small app that you can use to demo/test/play with your library. This library lives in `/lib-vue3/app`, and is written using `@vue-bridge/runtime` so that you can write your demo app's components once for both Vue 2 and 3, just like your library.

### `pnpm build-all`

Build both libraries with Vite. The trick is that `lib-vue2` symlinks the source folder from `/lib-vue3`, so both libraries use the same source files. Write once, built twice.

#### Watch mode

You can alternatively run `build-watch-all` if you wnt to use vite's watch mode for re-running builds on src file changes.

### `pnpm test-all`

Runs unit tests for both libraries. Uses tests from the symlinked `/lib-vue3/src` folder for Vue 2 tests. Write tests once, run them against both Vue 2 and 3.

### `pnpm lint`

Run eslint on both projects

### Auto-Fix

Runing `ünpm lint-fix`, eslint will fix all auto-fixable issues.

### `pnpm release`

Convenience command that builds your projects, runs all tests, and then runs `pnpm publish`