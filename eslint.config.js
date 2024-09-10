// eslint.config.js
import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
  js.configs.recommended,
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',  // Define window as a global
        document: 'readonly', // Optionally, also add document
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
