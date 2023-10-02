<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div id="app">
    <Header />
    <router-view />
    <menu-sidebar :show="showSidebar" @toggle="toggleSidebar"/>
  </div>
  <Footer />

  

</template>



<style>
  #app{
    display:block;
    width: 100%;
    height: 700px;
    margin-bottom: 100px;
  }
</style>

<script>
  import Header from './components/Header.vue';
  import MenuSidebar from './components/Sidebar.vue'
  import Footer from './components/footer.vue'

  export default {
    data() {
      return{
        showSidebar :false
      }
    },
    methods:{
      toggleSidebar(){
        this.showSidebar = !this.showSidebar
    }
  },
  components: {
    MenuSidebar , Header, Footer
  }


}
</script>

