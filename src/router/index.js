import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home,
  NewFeature,
  Performance,
  Tableros,
  Tareas,
  Equipos
} from '@/views'

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
    component: Tareas
  },
  {
    path: '/tableros',
    name: 'Tableros',
    component: Tableros
  },
  {
    path: '/performance',
    name: 'Performance',
    component: Performance
  },
  {
    path: '/new-feature',
    name: 'NewFeature',
    component: NewFeature
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: Equipos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
