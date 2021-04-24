module.exports = {
  env: {
    browser : true,
    es2021  : true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion : 12,
    sourceType  : 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope' : 'off',
    'key-spacing'              : ['error', {
      align: {
        beforeColon : true,
        afterColon  : true,
        on          : 'colon',
      },
    }],
    'jsx-props-no-spreading'       : 'off',
    'react/jsx-props-no-spreading' : 'off',
    'no-async-promise-executor'    : 'off',
    'class-methods-use-this'       : 'off',
  },
};
