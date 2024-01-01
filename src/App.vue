<template>
  <div class="app-contianer">
    <div class="title">Vue</div>
    <h1>count: {{ count }}</h1>
    <button @click="count++">count++</button>
    <img :src="logoImg" alt="" />
    <Test />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Test from "./components/Test.vue";
import logoImg from "./assets/logo.png";

let count = ref(0);

console.log("logoImg", logoImg);

const testFn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("test");
    }, 500);
  });
};
</script>

<style lang="scss" scoped>
.app-contianer {
  .title {
    color: green;
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
