# TSConfig

This folder contains all of the project reference configs for this repository.

## Types of files

|File                       |Description               |
|---------------------------|--------------------------|
|`tsconfig.node.json`       |for config files like viteconfig, eslintrc etc.|
|`tsconfig.vue2.lib.json`   | `/lib-vue2/src`, excluding test files         |
|`tsconfig.vue2.app.json`   | `/lib-vue2/app`, files for the demo app       |
|`tsconfig.vue2.vitest.json`| extends lib config, but includes test files   |
|`tsconfig.vue3.lib.json`   | `/lib-vue3/src`, excluding test files         |
|`tsconfig.vue3.app.json`   | `/lib-vue3/app`, files for the demo app       |
|`tsconfig.vue2.vitest.json`| extends lib config, but includes test files   |

## Which config file is used to create my library's types?

|Version| Config file |
|-------|-------------|
|Vue 2  | `tsconfig.vue2.lib.json` |
|Vue 3  | `tsconfig.vue3.lib.json` |

So you should edit these files if you want to change any compiler settings relevant to the build process of your library.

## What are the `*.app.json` and `*.vitest.json` files needed for?

* The lib files only include the /src files, and exclude any tests.
  * in src files, we have the browser api (`window` etc) available.
* So `*.vitest.json` extends the lib config and includes the test files again.
  * in test files, we additionally have the node api (`process` etc) available.
* The `*.app.json` configs include the ./app files. Since they should not be part of the generated declaration files, we moved them into their own project reference/config.