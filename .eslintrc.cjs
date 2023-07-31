module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: [
    // 参考vuejs官方的eslint配置： https://eslint.vuejs.org/user-guide/#usage
    'plugin:vue/vue3-recommended',
    // 覆盖 ESLint 配置，确保 prettier 放在最后
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: { modules: true, jsx: true },
  },
  plugins: [
    'vue', // 引入vue的插件 eslint-plugin-vue
    'prettier', // 引入规范插件 eslint-plugin-prettier
    '@typescript-eslint',
  ],
  globals: {}, // 这里时配置规则的,自己看情况配置
  rules: {},
}
