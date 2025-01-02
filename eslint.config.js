import globals from 'globals';
import js from '@eslint/js';
import tsEslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import next from 'eslint-plugin-next';
import prettier from 'eslint-plugin-prettier';

import reactHooks from 'eslint-plugin-react-hooks';
import tailwindcss from 'eslint-plugin-tailwindcss';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: '@typescript-eslint/parser',
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      react,
      next,
      prettier,
      'react-hooks': reactHooks,
      tailwindcss,
    },
    extends: [
      js.configs.recommended,
      ...tsEslint.configs.recommended,
      'plugin:react/recommended',
      'plugin:next/core-web-vitals',
      'plugin:prettier/recommended',
      'plugin:tailwindcss/recommended',
    ],
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-irregular-whitespace': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
