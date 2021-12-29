# Vue 2 Compat Build Package

This package is the Vue 2 version of your library. In it's current configuration, it's not intended to be published itself. Rather, it's used as a separate workspace holding all the Vue 2 related dependencies and manage the build process for the Vue 2 version of your library.


## Things to be aware of.

* The build artifacts are output in `/lib-vue3/dist-vue2`, so that both the Vue 2 and Vue 3 build can be published as one package.
* The src folder is just a symlink to `/lib-vue3/src`. So both packages share the same source.
* We 
* You need to synchronize the dependencies between both packages. if you add a new dependency to `/lib-vue3`, you likely also want to install it here. pnpm can help doing that in a single command: running i.e. `pnpm add lodash-es -r` in the project root will add the package `lodash-es` as a dependencies to both `/lib-vue2` and `/lib-vue3`.
