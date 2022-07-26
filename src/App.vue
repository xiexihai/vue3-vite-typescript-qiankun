<template>
  <a-layout class="layout-wrapper">
    <Sidebar />
    <a-layout>
      <Header />
      <Main />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from '@layout/Header.vue'
import Sidebar from '@layout/Sidebar.vue'
import Main from '@layout/Main.vue'
var a = '2'
console.log('asd')
@Options({
  components: {
    Header,
    Sidebar,
    Main,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss" scoped>
#app {
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
