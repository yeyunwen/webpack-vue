<template>
  <div class="app-contianer">
    <div class="title">Vue</div>
    <h1>count: {{ count }}</h1>
    <button @click="count++">count++</button>
    <Test />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Test from "./components/Test.vue";

let count = ref(0);
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
