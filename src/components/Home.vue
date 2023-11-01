<template>
  <div class="container">
    <el-card>
      <template #header>
        <el-button type="primary" @click="handleClick('/about')"
          >About</el-button
        >
        <el-button type="primary" @click="handleClick('/contact')"
          >Contact</el-button
        >
      </template>
      <!-- <Transition> -->
        <router-view />
      <!-- </Transition> -->
    </el-card>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const handleClick = (path) => {
  router.push(path);
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdc3c7;
  height: 100vh;
  width: 100vw;
}
.el-card {
  width: 500px;
  height: 300px;
}
</style>
