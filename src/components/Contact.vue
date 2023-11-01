<template>
  <div class="container">Contact</div>
  <div class="container-item">
    <div>{{ counter.count }}</div>
    <el-button type="primary" @click="counter.increment"
      >Add Counter in Pinia</el-button
    >
  </div>
</template>
<script setup>
import { useCounterStore } from "@/store/counter";
const counter = useCounterStore();
</script>
<style scoped>
.container-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
