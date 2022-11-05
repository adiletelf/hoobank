module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    semi: [2, 'never'],
  },
}
