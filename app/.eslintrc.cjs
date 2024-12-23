module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports',
    'react-hooks',
    'react-refresh',
    '@tanstack/query',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'prettier.config.cjs',
    'tailwind.config.js',
    '**/gen/*',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'no-empty-pattern': 'off',
    'unused-imports/no-unused-imports': 'error',
    'jsx-a11y/alt-text': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-refresh/only-export-components': 'warn',
  },
}
