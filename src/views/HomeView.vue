

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
              Connect With Me!
            </h2>
            
            <div class="iconz">
              <a href="https://www.linkedin.com/in/corn%C3%A9-balie/" class="fab fa-linkedin" target="_blank"></a>

              <a href="https://github.com/Kortekz" target="_blank">
                      <button class="contact-git" >GITHUB</button>
                  </a>
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
  padding: 20px;
  width: 80%; 
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
  margin-bottom: 40px;
}
.content {
  flex: 1;
  text-align: left;
  padding-right: 20px; /* Adjust spacing between content and image */
  padding-top: 20px;
}
.name{
  color: #005ae2;
  font-size: 45px;
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
  margin-right: 50px;
}
.Me {
  max-width: 75%; 
  height: auto;
  border: 4px solid rgb(79, 78, 78);
  border-radius: 20px;
  /* Apply animation to the image border */
  animation: borderAndBoxShadowAnimation 2s infinite;
  position: relative;
  overflow: hidden;
}
/* ICONS */
.fab {
padding: 15px;
padding-left: 14px;
font-size: 25px;
width: 55px;
text-align: center;
text-decoration: none;
border-radius: 10px;
margin-right: 10px;
margin-left: 10px;
transition: 0.3s;
padding-bottom: 20px;
padding-top: 13px;
}
.fa-facebook:hover{
color: white;
opacity: 1.5;
transform: scale(1.1);
box-shadow: 0 0 20px #3B5998;
}
.fa-facebook {
background: #3B5998;
color: white;
}
.fa-linkedin {
background: #1385b9;
color: white;
/* padding-top: px; */
font-size: 25px;
}
.fa-linkedin:hover{
color: white;
opacity: 1.5;
transform: scale(1.1);
box-shadow: 0 0 20px #1385b9;
}
.fa-instagram {
background: rgb(172, 0, 149);
color: white;
}
.fa-instagram:hover{
color: white;
opacity: 1.5;
transform: scale(1.1);
box-shadow: 0 0 20px rgb(172, 0, 149);
}
.iconz{
padding-top: 10px;
margin-left: -10px;
justify-content: flex-end;
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

/* Media query for tablet and mobile devices */
@media (max-width: 768px) {
.content-wrapper {
  flex-direction: column;
  align-items: center;
}
.Me {
  width: 100%; /* Adjust image size for mobile */
  margin-bottom: 20px; /* Add margin between image and content on mobile */
  margin-left: -45px;
  }
.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  margin-left: 20px;
 }
}

/* Define the animation for the border and box shadow */
@keyframes borderAndBoxShadowAnimation {
0% {
  border-color: rgb(79, 78, 78);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
50% {
  border-color: #00c3ff;
  box-shadow: 0 0 20px #00c3ff;
  }
100% {
  border-color: rgb(79, 78, 78);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  }
}

</style>
