<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" style="height: 64px">logo</div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <router-link to="/about">nav 1</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <router-link to="/">nav 1</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <router-link to="/about">nav 1</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<style scoped>
.logo {
  height: 64px;
  line-height: 64px;
  font-size: 24px;
  color: #fff;
}
</style>
