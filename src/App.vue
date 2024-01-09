<template>
  <div id="app">

  <Navbar />
  <router-view />
  <Footer />

  </div>
 

</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default{
  components: {
    Navbar,
    Footer
  }
}
</script>


<style>
#app {
  font-family: Gantari, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  background-color: #22262a !important;
  overflow-x: hidden;
}
</style>
