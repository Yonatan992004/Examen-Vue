// Importa las funciones necesarias de Vue Router
import { createRouter, createWebHistory } from 'vue-router'
// Importa los componentes de las vistas que se utilizarán en las rutas
import HomeView from '../views/HomeView.vue'
import Configuracion from '../views/Configuracion.vue'
import AcercaDe from '../views/AcercaDe.vue'

// Crea una instancia del enrutador Vue Router
const router = createRouter({
  // Configura la estrategia de historial de navegación web
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [// Define las rutas de la aplicación
    {// Ruta principal (Inicio)
      path: '/',
      name: 'home',
      component: HomeView // Componente asociado a la ruta
    },
    {// Ruta de configuración de usuario
      path: '/Configuracion',
      name: 'configuracion',
      component: Configuracion // Componente asociado a la ruta
    },{// Ruta "Acerca de"
      path:'/AcercaDe',
      name:"acercaDe",
      component:AcercaDe // Componente asociado a la ruta
    }
  ]
})
// Exporta la instancia del enrutador para su uso en la aplicación
export default router
