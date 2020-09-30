import {createRouter, createWebHistory} from 'vue-router';
import Home from 'index/Home.vue'
import About from 'index/About.vue'


export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
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