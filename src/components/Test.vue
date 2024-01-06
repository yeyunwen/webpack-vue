<template>
  <div class="test">
    <h1>test component</h1>
    <div class="zhanwei">1211</div>
    <VueLazyComponent>
      <Big />
    </VueLazyComponent>
    <div ref="lazyContainer" class="lazy-conatiner">
      <div v-if="showContent" class="lazy-conatiner-content">content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
};
</script>

<script setup>
import Big from "./Big.vue";
import { component as VueLazyComponent } from "@xunlei/vue-lazy-component";
import { onMounted, ref } from "vue";

const lazyContainer = ref(null);
const showContent = ref(false);

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        console.log("isIntersecting");
      }
    },
    {
      threshold: 0.5,
      root: null,
    }
  );
  io.observe(lazyContainer.value);
});
</script>

<style lang="scss">
.test {
  font-size: 20px;
}
.zhanwei {
  height: 1000px;
}
.lazy-conatiner {
  background: paleturquoise;
  height: 300px;
  .lazy-conatiner-content {
    background: pink;
  }
}
</style>
