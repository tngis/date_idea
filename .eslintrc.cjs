// .eslintrc.cjs

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'vue/require-default-prop': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'eol-last': ['error', 'always'],
    'vue/no-v-html': 0,
  },
}
