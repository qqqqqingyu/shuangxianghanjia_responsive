import { createRouter, createWebHashHistory } from 'vue-router'
// import Login from '../views/Login.vue'
import MainPage from '../views/MainPage.vue'
import Classify from "@/views/Classify";
// import PublishActivity from "@/views/PublishActivity";
import Trade from "@/views/Trade";



const routes = [
  {
    path: '/',
    name: 'Trade',
    component: Trade
  },
  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/Classify',
    name: 'Classify',
    component: Classify
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
