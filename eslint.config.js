import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  js.configs.recommended,
  {
    files: ['resources/**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
    plugins: {
      vue,
    },
    rules: {
      'vue/no-unused-vars': 'error',
    },
  },
  {
    files: ['resources/**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**'], // Ignored paths
  },
];
