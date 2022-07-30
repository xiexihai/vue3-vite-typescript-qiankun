<template>
  <a-layout-header class="layout-header">
    <h1>Vue+Vite+Typescript+qiankun</h1>
    <div class="header-right">
      <a-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </div>
  </a-layout-header>
</template>
<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
</script>
<style lang="scss" scoped>
.layout-header {
  display: flex;
  height: 48px;
  line-height: 48px;
  padding: 0 20px;
  background: #fff;
  .header-right {
    flex: 1;
    text-align: right;
  }
}
</style>
