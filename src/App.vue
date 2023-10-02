<script setup>
// Importa los componentes y funciones necesarios de vue-router
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- El contenedor principal de la aplicación -->
  <div id="app">
    <Header /> <!-- Componente Header que muestra el encabezado de la página -->
    <router-view /><!-- RouterView para mostrar el contenido de las rutas definidas en vue-router -->
    <menu-sidebar :show="showSidebar" @toggle="toggleSidebar"/><!-- Componente MenuSidebar para mostrar la barra lateral del menú -->
  </div>
  <Footer /><!-- Componente Footer para mostrar el pie de página de la aplicación -->
</template>
<style>
  #app{/* Estilos para el contenedor principal de la aplicación */
    display:block;
    width: 100%;
    height: 700px;
    margin-bottom: 100px;
  }
</style>

<script>
// Importa los componentes necesarios
  import Header from './components/Header.vue';
  import MenuSidebar from './components/Sidebar.vue'
  import Footer from './components/footer.vue'

  export default {
    data() {
      return{
        showSidebar :false // Variable para controlar la visibilidad de la barra lateral del menú
      }
    },
    methods:{
      // Método para alternar la visibilidad de la barra lateral del menú
      toggleSidebar(){
        this.showSidebar = !this.showSidebar
    }
  },
  components: {
    MenuSidebar , Header, Footer // Registra los componentes para su uso en la plantilla
  }
}
</script>

