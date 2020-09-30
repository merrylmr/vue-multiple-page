import {createRouter, createWebHistory} from 'vue-router';
import Home from 'mobile/Home.vue'
import About from 'mobile/About.vue'

export default createRouter({
  // base:需要修改
  history: createWebHistory(process.env.BASE_URL+'mobile/'),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})