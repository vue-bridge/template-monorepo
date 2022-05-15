# Vue-Bridge Template

> Full Documentation for Vue-Bridge can be found at https://vue-bridge-docs.netlify.app
## Features of this template

*  Build, Test and Publish a component library for both Vue 2 and Vue 3 from *one* codebase
* Workspaces with [PNPM](https://www.pnpm.io)
* [Typescript](https://www.typescriptlang.org) (Easily [removable](#removing-typescript) for JS-Users)
* Linting with [Eslint](https://) 8
* Unit-Tests with [Vitest](https://vitest.dev)
* Bundling and local dev with [Vite](https://vitejs.dev)
* Interoperability supported by the `@vue-bridge/*` packages:
  * `@vue-bridge/eslint-config` : eslint rules that support you in writing interoperable code
  * `@vue-bridge/runtime`       : tiny runtime enhancements for interoperability between Vue 2 and  Vue 3
  * `@vue-bridge/vite-plugin`   : Vite plugin for build-time optimizations
  * `@vue-bridge/testing`       : Harmonized API for `@vue/test-utils` versions `1` and `2`

Roadmap TODOs:

* _TODO_ ⚙️: E2E Tests with Cypress

## Getting Started

Install the template by running the following command in a folder of your choice:

```bash
# create in the current directory:
npx degit vue-bridge/template-monorepo
# create in a new subfolder called "my-library":
npx degit vue-bridge/template-monorepo my-library
```

...or just click the big green button labeled "use this template" in the github repo.

We recommend starting with the docs at `https://vue-bridge-docs.netlify.app`, but you can also dive right into this repo and come back to the docs whenever you need them.

At the very least, make sure to go through this short todo list and then read the rest of the README to have a smooth start. 

- [ ] Install dependencies by running `pnpm i`. Not using pnpm yet? Get started at https://pnpm.io
- [ ] Give this monorepo a proper name, description and your author details (`/package.json`)
- [ ] Give your packages a proper name, description and your author details (`/lib-vue*/package.json`)
- [ ] Give your package a real global Name in each `vite.config.ts` (look for the `libraryGlobalName` - it should be the **same** in both configs)
- [ ] Add your name to the LICENSE files in the root folder as well as the package folders (`/lib-vue*`)
- [ ] Run `pnpm build-all` and inspect the build output in `/lib-vue{2,3}/dist`. Take a look at the package exports defined in `package.json` to get a picture of what's being exported by your package.
- [ ] Congrats, you're ready - start coding!


## Recommended Reading

TODO: Links to Vue-Bridge docs

## Project Structure

This is an overview meant to give you an idea about the general layout and the important files and folders. Some files and folders left out for brevity
```
lib-vue2/
├─ app/               # Symlink to /lib-vue3/app
├─ dist/              # `pnpm build` output of Vue 2 version of library
├─ typings/           # generated type declarations of this version
├─ src/               # Symlink to /lib-vue3/src
├─ index.html         # Entry point for demo app (`pnpm dev`)
├─ package.json       # contains Vue 2 dev deps and runtime deps
├─ vite.config.js     # Build & test config for Vue 2 version

lib-vue3/
├─ app/               # Demo application consuming /src, for Vue2&3
├─ dist/              # build output of Vue 3 version of library
├─ src/               # Source files of your library
├─ index.html         # Entry point for demo app (`pnpm dev`)
├─ package.json       # contains Vue 3 dev deps and runtime deps
├─ vite.config.js     # Build & test config for Vue 2 version

package.json          # contains shared dev dependencies a d scripts
pnpm-workspace.yaml   # Config of workspace directories
vite.config.shared.js # shared config for vite used by both packages
```

## Commands

This template comes preconfigured with npm scripts to develop, test and build your library for Vue 3 and Vue 2 at the same time. Here's an overview:

### Root `package.json`

You can run the following commands from the project root.

|Command|Description|
|-------|-----------|
| `pnpm dev-vue2` | Start a small app that you can use to demo/test/play with your library. See `/lib-vue2/app` |
| `pnpm dev-vue3` | Start a small app that you can use to demo/test/play with your library. See `/lib-vue3/app` |
| `pnpm build-all`| Build both packages, and generate type declarations |
| `pnpm test-all` | Run unit tests in both packages |
| `pnpm lint` | Run eslint on all files, with auto-fixing |

## Commands in Workspaces (`/lib-vue2` & `/lib-vue3`)

These commands can be used in the two package directories. They are the same for both.

|Command            |Description|
|-------------------|-----------|
| `pnpm dev`        | Start a small app that you can use to demo/test/play with your library. |
| `pnpm build`      | Build the package and generate type declarations |
| `pnpm build-watch`| Build the package in watch mode, re-bundling on file changes |
| `pnpm tsc-watch`  | run `vue-tsc` in watch mode, getting type checks run on file change |
| `pnpm test`       | Run unit tests in both packages |
| `pnpm test-watch` | Build both packages, and generate type declarations |

## Workflow

Here's a rough outline of the workflow of developing:

* Edit source files in `/lib-vue3` to write your library.
  * `pnpm dev` provides a dev-server with a demo app in which you can test your library/components with HMR.
* Write Tests in `/lib-vue3/src/__tests__` using `@vite-bridge/testing` as a cross-compatible drop-in replacement for `@vue/test-utils`
  * `pnpm test-watch` runs your tests in watch mode for instant feedback while writing your tests, thanks to Vitest.
* If you want to run/test your library in Vue 2, you can run the same commands in `/lib-vue2` anytime.
* To run all tests against both versions, you can use `pnpm test-all` from the root folder.
* Build both packages, you can use `pnpm build-all` from the root folder,
* After those commands have run, you can publish both packages. (We may provide guidance on this as well in the Vue-Bridge docs at a later time. PRs welcome)

## Dependencies

When developing your library, you might need to introduce new dependencies, let's say [`lodah-es`](https://www.npmjs.com/package/lodash-es). You need to install this dependency in **both** packages, as you will build and publish both packages (provided you stick to the default config of this template).

PNPM allows you to run commands on multiple package with [filters](https://pnpm.io/filtering), which is amazing. Herer are two usefule commands to add or remove dependencies to your two packages (the `--filter` matches the package names, so change it accordingly):

```bash
# Add dependency
pnpm add --filter "example-vue-library-*" lodash-es
# Add dev dependency
pnpm add -D --filter "example-vue-library-*" lodash-es
# Remoe dependency
pnpm remove --filter "example-vue-library-*" lodash-es
```

## Typescript

This template comes with Typescript support pre-configured. Vite & Vitest can read TS out of the box, but don't do type-checking or generate declaration files. For that, we use `vue-tsc`.

The tsconfig file structure was taken from the official [`create-vue`](https://github.com/vuejs/create-vue) package, so if you already created a Vue 3 project with that tool, it should look familiar.

### Removing Typescript

1. Install the following dependencies from root:

```json
"devDependencies": {
  "@types/node": "16",
  "@typescript-eslint/eslint-plugin": "^5.23.0",
  "@typescript-eslint/parser": "^5.23.0",
  "tslib": "^2.4.0",
  "typescript": "~4.6.4",
}
```

2. remove Typescript from .eslintrc.cjs

```diff
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
-    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:vue/vue3-essential",
    "@vue-bridge/eslint-config",
  ],
  parserOptions: {
-    parser: require.resolve("@typescript-eslint/parser"),
-     extraFileExtensions: [".vue"],
    ecmaFeatures: {
      jsx: true,
    },
  },
```

3. remove all tsconfig*.json files, and replace them with a simple jsconfig.json in the project root:

```json
{
  "include": [
    "lib-*/src/**/*.{ts,tsx,js,jsx,vue}",
    "lib-*/src/**/*.d.ts",
    "lib-*/*.{js,ts}"
  ]
}
```

You can leave all of these *.ts references in there because Vite, using esbuild internally, can still deal with Typescript files and treat them as JS, basically.