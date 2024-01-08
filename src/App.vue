<template>

  <nav>
    <!-- Navbar links -->
    <!-- Logo -->
   <li> </li>
   <li> <router-link to="/">Home</router-link> </li>  
   <li> <router-link to="/about">About</router-link> </li>
   <li> <router-link to="/projects">Projects</router-link> </li>
   <li> <router-link to="/resume">Resume</router-link> </li>
   <li> <router-link to="/testimonials">Testimonials</router-link> </li>
   <li> <router-link to="/contact">Contact</router-link> </li>

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
 display: flex;
 justify-content: flex-end;
 background-color: transparent;
 padding: 1rem; 
 text-decoration: none;
}

nav li {
 list-style: none;
 text-decoration: none;
 padding-right: 50px;

}

nav a {
 text-decoration: none;
 color: #343a40;
 font-size: 20px;
}

nav a.router-link-exact-active {
 color: #0004ff;
}

nav a:hover {
 color: #0004ff;
}
</style>
