import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tareas',
    name: 'Tareas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tareas.vue')
  },
  {
    path: '/tableros',
    name: 'Tableros',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tableros.vue')
  },
  {
    path: '/performance',
    name: 'Performance',
    component: () => import(/* webpackChunkName: "about" */ '../views/Performance.vue')
  },
  {
    path: '/new-feature',
    name: 'NewFeature',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewFeature.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
