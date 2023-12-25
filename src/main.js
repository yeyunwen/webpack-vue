import "./style/1.css";
import Vue from "vue";
import App from "./App.vue";

function component() {
  const element = document.createElement("div");

  // lodash 现在使用 import 引入。
  element.innerHTML = "hello11122222 webpack";
  element.classList.add("test");

  return element;
}

document.body.appendChild(component());

new Vue({
  render: (h) => h(App),
}).$mount("#app");
