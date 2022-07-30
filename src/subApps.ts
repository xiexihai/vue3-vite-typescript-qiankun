import router from '@/router'
import { registerMicroApps, start } from 'qiankun'

// 退出登录
const logout = () => {
  router.push('/')
}
// 用户信息
const userInfo = {
  id: '1',
  name: 'admin',
  tel: '15296000022',
  roles: [1, 3, 4],
  logout,
}
const apps = [
  {
    name: 'vue3',
    entry: 'http://localhost:3001',
    container: '#container',
    activeRule: '/shop',
    props: { userInfo },
  },
]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const runApps = () => {
  // 注册并启动应用
  registerMicroApps(apps)
  start()
}
export default runApps
