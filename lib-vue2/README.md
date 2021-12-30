# Vue 2 Compat Build Package

This package is the Vue 2 version of your library. In it's current configuration, it's not intended to be published itself. Rather, it's used as a separate workspace holding all the Vue 2 related dependencies and manage the build process for the Vue 2 version of your library.


## Things to be aware of.

* The build artifacts are output in `/lib-vue3/dist-vue2`, so that both the Vue 2 and Vue 3 build can be published as one package.
* The src folder is just a symlink to `/lib-vue3/src`. So both packages share the same source.
* We 
* You need to synchronize the dependencies between both packages. if you add a new dependency to `/lib-vue3`, you likely also want to install it here. pnpm can help doing that in a single command: running i.e. `pnpm add lodash-es -r` in the project root will add the package `lodash-es` as a dependencies to both `/lib-vue2` and `/lib-vue3`.

## Alternative Publishing Strategy

This template is preconfigured to publish both the Vue 2 and Vue 3 versions in one package, located in `/lib-vue3`. You can alternatively decide to publish two packages, one for Vue 2 and one for Vue 3. Here's what you would have to change for that:

### `/lib-vue2/package.json`

* give a distinct name
* remove "private" key
* add module exports

```json
{
 "name": "some-name-different-from-lib-vue3",
 "private": "false",
 "type": "module",
 "main": "dist/index.cjs.cjs",
 "module": "dist/index.es.js",
 "typings": "index.vue2.d.ts",
  "exports": {
    ".": {
      "script": "dist/index.iife.js",
      "import": "dist/index.es.js",
      "require": "dist/index.cjs.cjs"
    },
  },
  "files": [
    "dist",
    "src",
    "index.vue2.d.ts",
    "README.md",
  ]
}
```

### `/lib-vue2/vite.config.ts`

change build output to `./dist`:

```diff
// ...
  build: buildConfig({
-    outDir: "../lib-vue3/dist-vue2",
+    outDir: "./dist",
    version: "vue2",
  }),
//...
```

### Setup src folder

Right now, `/lib-vue2` is a symlink to `/lib-vue3/src`. For types, we need to publish the src folder with out package, not just a symlink. so instead, we need an actual copy of the source folder

1. Remove symlink - just delete the `/lib-vue2/src` folder.
2. install `rimraf` && `cpy-cli`

```bash
# in /lib-vue2
pnpm add -D rimraf cpy-cli
```

3. Adjust these scripts in package.json:

```diff
"script": {
-  "dev": "vite build --watch",
+  "prepare-src": "rimraf src && cpy ../lib-vue3/src/* ./src/*
-  "build": "vite build",
+  "build": "pnpm prepare-src && vite build",
-  "test": "vitest --reporter=verbose --run",
+  "test": "pnpm prepare-src && vitest --reporter=verbose --run",
-  "test-watch": "vitest --reporter=verbose",
+  "test-watch": "pnpm prepare-src && vitest --reporter=verbose",
}
```

Note that watch mode no longer works without a symlink

### `index.vue2.d.ts`

Move `/lib-vue3/index.vue2.d.ts` to `/lib-vue2/index.vue2.d.ts`


### That's it!

Now you can run `pnpm release` and pnpm will test, build and publish both packages!