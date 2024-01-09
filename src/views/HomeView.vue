<template>

  <div class="container">
    <div v-if="home && home.length > 0">
      <div v-for="person in home" :key="person.Name" class="content-wrapper">
       
        <div class="content">
          <h2>{{ person.Name }}</h2>
          <h3>{{ person.title }}</h3>
          <p class="HomeP">{{ person.description }}</p>
        </div>

        <div class="image-container">
          <img class="Me" :src="person.image" alt="Cover Image">
        </div>

      </div>
    </div>
    <div v-else>
      <p>No information available.</p>
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

.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}
.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 20px; /* Adjust spacing between content and image */
  margin-bottom: 20px; /* Add bottom margin to avoid overlap */
}
.content {
  text-align: left;
  padding-top: 50px;
}
h2 {
  color: #3244ff !important;
}
h3 {
  color: white !important;
  padding-top: 10px;
}
.HomeP {
  color: white;
  font-size: 20px;
  padding-top: 10px;
  margin-top: auto; /* Push content to the top */
}
.image-container {
  align-self: flex-end;
  margin-top: 20px; /* Push image to the top */
  padding-bottom: 50px;
}
.Me {
  width: 40%; /* Adjust image size */
  height: auto;
  border: 4px solid rgb(79, 78, 78);
  border-radius: 5px;
}
/* Media query for tablet and mobile devices */
@media (max-width: 768px) {
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap; 
  }
  .content-wrapper {
    margin-right: 0;
    margin-bottom: 30px;
    text-align: center;
  }
  .Me {
    width: 70%;
  }
}
</style>
