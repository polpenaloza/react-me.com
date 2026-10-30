import path from 'node:path'
import { fileURLToPath } from 'node:url'

import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const rootDirectory = path.dirname(fileURLToPath(import.meta.url))
const eslintPackageDirectory = path.join(rootDirectory, 'packages/eslint')
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: eslintPackageDirectory,
  recommendedConfig: js.configs.recommended,
  resolvePluginsRelativeTo: eslintPackageDirectory,
})

export default [
  {
    ignores: [
      '**/.cache/**',
      '**/.turbo/**',
      '**/build/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/out/**',
      'turbo.json',
    ],
  },
  ...compat.config({
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'turbo',
      'prettier',
      'plugin:jsx-a11y/recommended',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-empty-function': 'error',
      'no-irregular-whitespace': 'error',
      'no-trailing-spaces': 'error',
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      'react/jsx-key': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'prettier/prettier': ['error'],
      camelcase: 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  }),
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
]
