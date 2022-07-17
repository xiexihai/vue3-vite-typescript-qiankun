<template>
  <a-layout-header class="layout-header">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => (collapsed = !collapsed)"
    />
    <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
  </a-layout-header>
</template>
<style scoped>
.layout-header {
  background: #fff;
}
</style>
>
