<template>
  <div class="home-rows">
    <a-row :gutter="16">
      <a-col
        class="gutter-row"
        :span="6"
        v-for="item in data"
        :key="item.id"
        @click="handleToApp(item)"
      >
        <div class="gutter-box">
          <h4><IdcardTwoTone class="icon" />{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import router from '@/router'
import {
  IdcardTwoTone,
  // ReconciliationTwoTone,
  // RocketTwoTone,
  // AccountBookTwoTone,
} from '@ant-design/icons-vue'
import { IAppItem } from '@/services/apps/interface'
const data: IAppItem[] = reactive([
  {
    id: 1,
    title: '用户管理系统',
    description: '用户管理系统用户管理系统用户管理系统',
    icon: '',
    url: '/shop',
  },
  {
    id: 2,
    title: '财务管理系统',
    description: '财务管理系统财务管理系统财务管理系统',
    icon: '',
    url: '/shop/list',
  },
  {
    id: 3,
    title: '物流管理系统',
    description: '物流管理系统物流管理系统物流管理系统物流管理系统',
    icon: '',
    url: '/shop/form',
  },
  {
    id: 4,
    title: '商品管理系统',
    description: '商品管理系统商品管理系统商品管理系统',
    icon: '',
    url: '/shop/about',
  },
])

const handleToApp = (item: IAppItem) => {
  router.push(item.url)
}
</script>
<style lang="scss" scoped>
.home-rows {
  max-width: 1200px;
  margin: 16px auto;
  .gutter-box {
    border-radius: 4px;
    padding: 24px;
    cursor: pointer;
    background-color: #fff;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0px 6px 8px rgb(0 0 0 / 15%);
    }
    h4 {
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
    }
    .icon {
      font-size: 24px;
      margin-right: 8px;
      display: inline-block;
      vertical-align: top;
    }
    p {
      font-size: 12px;
      color: #aaa;
      height: 44px;
      line-height: 22px;
      overflow: hidden;
    }
  }
}
</style>
