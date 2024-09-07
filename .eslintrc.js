module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    "no-unused-vars": "off",
    // Add your project-specific ESLint rules here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};