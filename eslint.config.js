import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
  js.configs.recommended,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@babel/eslint-parser', // Use Babel for JavaScript inside <script> in .vue files
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false, // Prevent the need for a separate Babel config file
      },
    },
    plugins: {
      vue,
    },
    rules: {
      'vue/no-unused-vars': 'error',
      // Add more Vue-specific rules if necessary
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
  },
];
