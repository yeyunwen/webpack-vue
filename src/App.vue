<template>
  <div class="app-contianer">
    <div>Vue</div>
    <h1>count: {{ count }}</h1>
    <button @click="count++">count++</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

let count = ref(0);
</script>

<style></style>
