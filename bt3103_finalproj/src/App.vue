<template>
  <div id="app">
    <app-header v-if="!['/', '/login', '/signup', '/merchant-login', '/merchant-inputs'].includes($route.path)"></app-header>
    <!--<app-navbar></app-navbar>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
//import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    'app-header':Header,
    //'app-navbar':Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
