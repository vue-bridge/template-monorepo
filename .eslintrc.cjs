module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:vue/vue3-essential",
    "@vue-bridge/eslint-config",
  ],
  parserOptions: {
    parser: require.resolve("@typescript-eslint/parser"),
    extraFileExtensions: [".vue"],
    ecmaFeatures: {
      jsx: true,
    },
  },

  overrides: [
    // Treat root js/ts files as node files
    {
      files: ["*.js", "*.ts", "lib-*/**/*.{js,ts}"],
      env: {
        node: true,
      },
    },
    // Test files have both node and browser APIs available
    {
      files: ["**/*spec.{js,ts}"],
      env: {
        node: true,
        browser: true,
      },
    },
  ],
};