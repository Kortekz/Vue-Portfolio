

<template>
  
  <div class="container">
    <div v-if="home && home.length > 0">
      <div v-for="person in home" :key="person.Name" class="content-wrapper">
        
        <div class="content">
          <h2 class="name">{{ person.Name }}</h2>
          <h3 class="title">{{ person.title }}</h3>
          <p class="HomeP">{{ person.description }}</p>


          <div class="buttons">
            <h2 class="homeCo">
              <!-- Connect With Me! -->
            </h2>
            
            <div class="iconz">
              <a href="https://www.linkedin.com/in/corn%C3%A9-balie/" class="fab fa-linkedin" target="_blank"></a>
              <a href="https://github.com/Kortekz" target="_blank" class="fab fa-github"></a>
            </div>


            <!-- <div class="btns">
                <a href="https://github.com/Kortekz">
                    <button class="contact-git">GITHUB</button>
                </a>
            </div> -->

          </div>

        </div>

        <div class="image-container1">
          <img class="Me" :src="person.image" alt="Cover Image">
        </div>
      </div>
    </div>

    <div v-else class="spinny">
      <div class="spinner-border"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  computed: {
    home() {
      return this.$store.state.home;
    },
  },
  mounted() {
    this.$store.dispatch('fetchHome');
  },
};
</script>

<style scoped>
.spinny {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 600px;
  margin-top: 200px;
}
.spinner-border {
  color: white;
  text-align: center;
}
.container {
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-wrap: wrap;
  margin-top: 0px !important;
  padding: 40px;
  width: 100%; 
  margin: 50px auto; /* Center the container and add a fixed top margin */
}
.content-wrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
}
.image-container1 {
  flex: 1;
  position: relative;
  display: inline-block;
  animation: borderAnimation 2s infinite; 
  border-radius: 5px;
  overflow: hidden;
  /* margin-bottom: 20px; */
}
.content {
  flex: 1;
  /* text-align: left; */
  /* padding-right: 20px; */
  margin-top: 70px;
}
.name{
  color: #005ae2;
  font-size: 45px;
  text-align: center;
  justify-content: center;
  margin: auto 0;
} 
.homeCo{
  color: #005ae2;
  padding-top: 20px;
  font-size: 40px;
  font-weight: 600;
}
.title{
  color: white;
  padding-top: 20px;
  font-size: 40px;
}
.HomeP{
  color: white;
  padding-top: 20px;
  font-size: 25px;
  /* margin-right: 50px; */
}
.Me {
  max-width: 70%; 
  height: auto;
  border: 4px solid rgb(79, 78, 78);
  border-radius: 20px;
  /* Apply animation to the image border */
  animation: borderAndBoxShadowAnimation 2s infinite;
  position: relative;
  overflow: hidden;
}
/* ICONS */
/* Update icon styles */
.fab {
  padding: 15px;
  font-size: 35px;
  width: 68px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%; /* Make icons circular */
  margin-right: 10px;
  margin-left: 10px;
  transition: 0.3s;
  background: transparent; /* Transparent background */
  border: 2px solid #005ae2; /* Border color */
  color: white;
}

/* Update GitHub icon style */
.fab.fa-github {
  background: transparent; /* Transparent background */
  border: 2px solid #005ae2; /* Border color */
}

/* Hover effect for icons */
.fab:hover {
  color: white;
  background-color: #005ae2;
  opacity: 1.5;
  transform: scale(1.1);
  box-shadow: 0 0 20px #005ae2;
}

/* GitHub icon hover effect */
.fab.fa-github:hover {
  background-color: #005ae2;
  border-color: #005ae2;
}

.iconz {
  display: flex;
  justify-content:center; 
  /* padding-top: 10px; */
  margin-left: -10px;
  margin-right: 20px; /* Add margin to separate icons from other content */
}
.btns{
  padding-top: 30px;
  margin-bottom: 40px;
}
.contact-git {
padding: 15px;
background: #005ae2;
font-size: 18px;
color: white;
font-weight: 500;
text-decoration: none;
border-radius: 10px;
border: none;
text-decoration: none; 
transition: 0.5s;
margin-left: 15px;
margin-top: px !important;
}
.contact-git:hover {
background-color: transparent;
border: 2px solid #005ae2;
transform: scale(1.05); 
box-shadow: 0 0 20px #005ae2; 
transition: 0.5s;
}

/* Media query for 720px */
@media (max-width: 767px) {
  
  .container {
    width: 90%; 
  }
  .content-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .Me {
    max-width: 90%; 
    margin-left: 0; 
  }
  .content {
    text-align: center; 
    padding-right: 0; 
  }
  .name {
    font-size: 35px; 
  }
  .homeCo {
    font-size: 30px; 
  }
  .title {
    font-size: 30px; 
  }
  .HomeP {
    font-size: 20px; 
    margin-right: 0;
  }
   /* Update icon styles for mobile */
   .fab {
    padding: 12px;
    font-size: 30px;
    width: 60px !important;
  }
  /* Update GitHub icon style for mobile */
  .fab.fa-github {
    padding: 12px;
    font-size: 30px;
    width: 60px;
  }
  .iconz {
    margin-top: -20px !important;
    margin-bottom: 40px !important;
    justify-content: center; /* Center the icons horizontally */
    margin: 20px 0; /* Adjust margin as needed */
  }
}

/* Media query for 450px */
@media (max-width: 450px) {
  .container {
    width: 90%; 
  }
  .content-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .Me {
    max-width: 90%; 
    margin-left: 0; 
  }
  .content {
    text-align: center; 
    padding-right: 0; 
  }
  .name {
    font-size: 35px; 
  }
  .homeCo {
    font-size: 30px; 
  }
  .title {
    font-size: 30px; 
  }
  .HomeP {
    font-size: 20px; 
    margin-right: 0;
  }
   /* Update icon styles for mobile */
   .fab {
    padding: 12px;
    font-size: 30px;
    width: 60px !important;
  }
  /* Update GitHub icon style for mobile */
  .fab.fa-github {
    padding: 12px;
    font-size: 30px;
    width: 60px;
  }
  .iconz {
    margin-top: -20px !important;
    margin-bottom: 40px !important;
    justify-content: center; /* Center the icons horizontally */
    margin: 20px 0; /* Adjust margin as needed */
  }
}

/* Media query for 400px */
@media (max-width: 400px) {
  .container {
    width: 100%; 
  }
  .content-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .content {
  margin-top: -40px;
  }
  .Me {
    margin-top: 20px;
    max-width: 90%;
    margin-left: 0; 
  }
  .content {
    text-align: center; 
    padding-right: 0; 
  }
  .name {
    font-size: 30px; 
  }
  .homeCo {
    font-size: 25px; 
  }
  .title {
    font-size: 25px; 
  }
  .HomeP {
    font-size: 20px; 
    margin-right: 0; 
  }
   /* Update icon styles for mobile */
   .fab {
    padding: 12px;
    font-size: 30px;
    width: 58px;
  }
  /* Update GitHub icon style for mobile */
  .fab.fa-github {
    padding: 12px;
    font-size: 30px;
    width: 58px;
  }
  .iconz {
    justify-content: center; /* Center the icons horizontally */
    margin: 0; /* Adjust margin as needed */
  }
}
/* Media query for 300px */
@media (max-width: 305px) {
  .container {
    width: 100%; 
  }
  .content-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .content {
  margin-top: -40px;
  }
  .Me {
    margin-top: 10px;
    max-width: 90%; 
    margin-left: 0; 
  }
  .content {
    text-align: center; 
    padding-right: 0; 
  }
  .name {
    font-size: 30px; 
  }
  .homeCo {
    font-size: 25px; 
  }
  .title {
    font-size: 25px; 
  }
  .HomeP {
    font-size: 18px; 
    margin-right: 0;
  }
  /* Update icon styles for mobile */
  .fab {
    padding: 10px;
    font-size: 28px;
    width: 50px !important;
  }
  /* Update GitHub icon style for mobile */
  .fab.fa-github {
    padding: 10px;
    font-size: 28px;
    width: 50px !important;
  }
  .iconz {
    justify-content: center; 
    margin: 0; 
  }
}


/* Define the animation for the border and box shadow */
@keyframes borderAndBoxShadowAnimation {
0% {
  border-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px white;
  }
50% {
  border-color: #005ae2;
  box-shadow: 0 0 20px #005ae2;
  }
100% {
  border-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px white;
  }
}

</style>
