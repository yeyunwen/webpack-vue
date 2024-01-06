module.exports = {
  root: true,
  parserOptions: {
    parser: "@babel/eslint-parser", // 用babel-eslint解析
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "plugin:prettier/recommended", "prettier"],
  plugin: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
