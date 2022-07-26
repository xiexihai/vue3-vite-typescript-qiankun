import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@views/Home.vue')
const About = () => import('@views/About.vue')
console.log('asd')
const aaaa = '1'
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
