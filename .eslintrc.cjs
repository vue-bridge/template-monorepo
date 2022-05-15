module.exports = {
  root: true,
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:vue/vue3-essential',
    '@vue-bridge/eslint-config',
  ],
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'vue/setup-compiler-macros': true,
    es2022: true,
  },
  overrides: [
    // Treat root js/ts files as node files
    {
      files: ['*.{cjs,js,jsx,ts,tsx}', 'lib-*/*.{cjs,js,jsx,ts,tsx}'],
      env: {
        node: true,
      },
    },
    // Test files have both node and browser APIs available
    {
      files: ['**/*spec.{js,ts}'],
      env: {
        node: true,
        browser: true,
      },
    },
  ],
};