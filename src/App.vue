<template>
  <nav class="navbar navbar-expand-lg">
    <!-- Logo -->
    <router-link to="/" class="navbar-brand">
      <img class="image1" src="https://drive.google.com/uc?id=18wmvc8bfOg086oQQIwSzZeAHoMxsKUvj" alt="">
    </router-link>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link black-text">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link black-text">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link black-text">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link black-text">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/testimonials" class="nav-link black-text">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link black-text">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
 color: #0004ff !important;
}

nav a:hover {
 color: #0004ff;
}

.image1{
  width: 80px;
  height: 80px;
  padding: 15px;
}
.black-text {
  color: black !important;
 font-weight: 600 !important;
}
</style>
