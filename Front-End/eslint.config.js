import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

export default {
  files: ['**/*.{js,mjs,cjs,jsx}'],
  plugins: {
    react: 'eslint-plugin-react',
    prettier: 'eslint-plugin-prettier',
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: globals.browser,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    'no-console': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  overrides: [
    pluginJs.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
  ],
};
