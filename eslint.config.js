// eslint.config.js
import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
  js.configs.recommended,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
    },
    rules: {
      'vue/no-unused-vars': 'error',
      // Add other rules here
    },
  },
];
