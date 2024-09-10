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

// eslint.config.js
import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
  js.configs.recommended,
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      parser: '@babel/eslint-parser',  // Use Babel parser for JS and Vue
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false, // Add this to avoid Babel config issues
      },
    },
    plugins: {
      vue,
    },
    rules: {
      'vue/no-unused-vars': 'error',  // Add Vue-specific rules here
      // Add other rules as needed
    },
  },
];

