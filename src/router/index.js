import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Configuracion from '../views/Configuracion.vue'
import AcercaDe from '../views/AcercaDe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Configuracion',
      name: 'configuracion',
      component: Configuracion
    },{
      path:'/AcercaDe',
      name:"acercaDe",
      component:AcercaDe
    }
  ]
})

export default router
