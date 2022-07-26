<template>
  <div>
    {{ a }}
    about
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
let id = 100
var adsd = 'asda'
console.log('adasd')
interface IList {
  id: number
  title: string
  name?: string
}
export default defineComponent({
  // 已启用类型推断
  data() {
    return {
      a: 'asdadad' as string,
      list: [
        {
          id: 1,
          title: 'xxx',
          name: 's',
        },
        {
          id: 2,
          title: '343434',
          name: 'sss',
        },
      ] as IList[],
    }
  },
  methods: {
    handleAdd() {
      this.list.push({
        id: id++,
        title: 'asd',
      })
    },
  },
})
</script>
