<template>
  <nav class="navbar navbar-expand-lg">
    <!-- Logo -->
    <router-link to="/" class="navbar-brand">
      <img class="image1" src="https://i.imgur.com/nhQVdDv.png" alt="">

    </router-link>

    <!-- Updated Navbar Toggler for mobile -->
    <button class="navbar-toggler white-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>


    <!-- Navbar links -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link black-text nav-link-underline">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link black-text nav-link-underline">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link black-text nav-link-underline">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link black-text nav-link-underline">Work Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/testimonials" class="nav-link black-text nav-link-underline">Peer Review</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link black-text nav-link-underline">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue';
import Router from 'vue-router';

// Vue.use(Router);

export default {
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      // Close the navbar when navigating to a new route
      document.querySelector('.navbar-collapse').classList.remove('show');
      next();
    });
  }
}
</script>

<style>
/* Your existing CSS styles */
template {
  font-family: 'Gantari', sans-serif; 
}

nav {
 display: flex;
 justify-content: flex-end;
 background-color: transparent !important;
 padding: 1rem; 
 text-decoration: none;
 transition: transform color 0.3s ease;
}
nav li {
 list-style: none;
 text-decoration: none;
 padding-right: 50px;
}
nav a {
  display: inline-block;
 position: relative;
 color: white ;
 font-size: 22px !important;
 text-decoration: none;
 margin: 0 10px;
 transition: color 0.3s ease-in-out;
}
nav a::after {
  content: '';
 position: absolute;
 width: 100%;
 height: 2px;
 bottom: 0;
 left: 0;
 background-color: #005ae2;
 transform: scaleX(0);
 transform-origin: bottom right;
 transition: transform 0.25s ease-out;
}
/* Show the underline on hover */
nav a.nav-link-underline:hover::after {
 transform: scaleX(1);
 transform-origin: bottom left;
}
nav a.router-link-exact-active {
 color: #005ae2 !important;
}
nav a:hover {
 color: #005ae2 !important;
 transition: transform color 0.3s ease;
}
.image1{
  width: 95px;
  height: 100px;
  padding: 15px;
  margin-left: 20px;
}
.black-text {
  color: rgb(255, 255, 255) !important;
  
}
.white-toggler {
  color: white;
  border: 2px solid white !important;
  padding-top: 8px !important;
  margin-right: 40px;
}

/* Styles for the three-line toggler */
.navbar-toggler .line {
  display: block;
  width: 25px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;
  background: white;
  border-radius: 1px;
}
/* Styling individual lines if needed */
.navbar-toggler .line:nth-child(1) {
  transform-origin: left center;
}
.navbar-toggler .line:nth-child(2) {
  transform-origin: left center;
}
.navbar-toggler .line:nth-child(3) {
  transform-origin: left center;
}

.collapse {
  transition: max-height 0.5s ease-out !important;
}

@media (max-width: 768px) {
  nav {
    justify-content: center;
    text-align: center;
  }
  nav ul {
    width: 100%;
    padding: 0;
  }
  nav li {
    padding: 10px;
  }
}
@media (max-width: 400px) {
  nav a {
  font-size: 18px !important;
}
nav li {
  font-size: 18px !important;
}
}

@keyframes pulseAnimation {
  0% {
    transform: scale(1);
  }
  
  50% {
    transform: scale(1.2);
  }
  
  100% {
    transform: scale(1);
  }
}

.image1 {
  width: 95px;
  height: 100px;
  padding: 15px;
  margin-left: 20px;
  animation: pulseAnimation 3s infinite; 
}

</style>
