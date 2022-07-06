module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-console': 'off',
    'jsx-one-expression-per-line': { "allow": "none"|"literal"|"single-child" },
  },
};
