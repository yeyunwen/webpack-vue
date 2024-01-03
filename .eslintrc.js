module.exports = {
  root: true,
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended"],
};
