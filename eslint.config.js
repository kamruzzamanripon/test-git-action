// eslint.config.js
// import js from '@eslint/js';
// import vue from 'eslint-plugin-vue';

// export default [
//   js.configs.recommended,
//   {
//     files: ['**/*.vue', '**/*.js'],
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//       globals: {
//         window: 'readonly',  // Define window as a global
//         document: 'readonly', // Optionally, also add document
//       },
//     },
//     plugins: {
//       vue,
//     },
//     rules: {
//       'vue/no-unused-vars': 'error',
//       // Add other rules here
//     },
//   },
// ];

import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
  js.configs.recommended,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@babel/eslint-parser', // Use Babel parser for inside <script> blocks in .vue files
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false, // Avoids needing a Babel config file
      },
    },
    plugins: {
      vue,
    },
    rules: {
      'vue/no-unused-vars': 'error',  // Example Vue rule
      // Add other rules as needed
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
