<template>
  <a-layout class="layout-wrapper">
    <Header v-if="curRouterPath === '/'" />
    <Main />
  </a-layout>
</template>

<script setup lang="ts">
import Header from '@layout/Header.vue'
import Main from '@layout/Main.vue'
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const curRouterPath = ref<string>(router.currentRoute.value.path)
watch(
  () => router.currentRoute.value.path,
  (newRouter) => {
    curRouterPath.value = newRouter
  }
)
</script>
<style lang="scss" scoped>
#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  .layout-wrapper {
    min-height: 100vh !important;
  }
}
</style>
