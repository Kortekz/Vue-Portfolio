<template>
  
  <!-- putting all ifs into one dive to help display the spinner -->
  <div v-if="projects && projects.length> 0">

    <div class="Projs">
    <div v-if="projects && projects.length > 0">
      <!-- Chunk of code to display the first object in projects array -->
      <div class="textPro" v-if="projects[0].projectTitle && projects[0].projectDescription">
        <div>
          <h1 class="title1">{{ projects[0].projectTitle }}</h1>
        </div>
        <div>
          <p class="Description1">{{ projects[0].projectDescription }}</p>
        </div>
      </div>

      <!-- Testimonial container for cards -->
      <div class="project-container">
        <div v-for="(data, index) in projects.slice(1)" :key="index" class="card">
          <div class="images-container">
            <img class="projectImage" :src="data.image" alt="Cover Image">
          </div>
          <div class="cards">
            <p class="name">{{ data.name }} </p>
            <p class="description">{{ data.description }}</p>

            <a class="link" :href="data.gitHub" >GitHub</a>
            <a class="link" :href="data.netlify">Netlify</a>

          </div>
        </div>
      </div>
    </div>

  </div>

</div>

    <div v-else class="spinny">
      <div class="spinner-border"></div>
    </div>
  
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProjects');
  },
};
</script>

<style scoped>
/* Add styling for alignment */
.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 50px;
  margin-right: 50px;

}
.card {
  width: calc(30% - 40px); 
  margin: 40px;
  border: 2px solid transparent !important;
  padding: 25px !important;
  border-radius: 25px;
  overflow: hidden;
  background-color: transparent !important;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 0 20px rgb(0, 90, 226, 0.8);
  transition: 0.5s;
  transform: scale(1.05);
}
.card img {
  width: 100%;
  height: 260px; 
  object-fit: cover; 
  margin-bottom: 10px;
  border-radius: 25px;
}
.cards {
  text-align: center;
}
.title1 {
  color: #005ae2;
}
.Description1 {
  color: white;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 50px;
}
.name{
  color: white;
  font-size: 22px;
}
.description{
  color: white;
  font-size: 20px;
}
.project-container {
  padding-bottom: 150px;
}
.link {
  display: inline-block;
  margin: 5px;
  padding: 10px 15px;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  background-color: #005ae2;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.link:hover {
  background-color: #003366;
}

/* Add media queries for responsiveness */
@media screen and (max-width: 768px) {
.card {
  width: calc(100% - 20px); 
  margin: 20px;
  }
.projectImage {
  height: 200px;
  }
.Description1 {
  font-size: 16px; 
  padding-top: 10px;
  padding-bottom: 30px;
  }
.name {
  font-size: 18px; 
  }
.description {
  font-size: 16px;
  }
.project-container{
  margin-left: 25px;
  margin-right: 25px;
  }
}

/* Additional media query for 300px */
@media screen and (max-width: 300px) {
.card {
  width: calc(100% - 10px); 
  margin: 10px;
  }
.projectImage {
  height: 150px; 
  }
.Description1 {
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 20px;
  }
.name {
  font-size: 16px;
  }
.description {
  font-size: 14px; 
  }
}
</style>
