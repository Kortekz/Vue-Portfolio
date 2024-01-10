

<template>
  <div class="container">
    <div v-if="home && home.length > 0">
      <div v-for="person in home" :key="person.Name" class="content-wrapper">
        <div class="content">
          <h2 class="name">{{ person.Name }}</h2>
          <h3 class="title">{{ person.title }}</h3>
          <p class="HomeP">{{ person.description }}</p>
        </div>
        <div class="image-container1">
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
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
}
.content-wrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
}
.image-container1 {
  flex: 1;
}
.content {
  flex: 1;
  text-align: left;
  padding-right: 20px; /* Adjust spacing between content and image */
  padding-top: 20px;
}
.name{
  color: #005ae2;
}
.title{
  color: white;
  padding-top: 20px;
}
.HomeP{
  color: white;
  padding-top: 20px;
  font-size: 18px;
}
.Me {
  max-width: 60%; /* Adjust image size */
  height: auto;
  border: 4px solid rgb(79, 78, 78);
  border-radius: 5px;
}
/* Media query for tablet and mobile devices */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
  .Me {
    width: 100%; /* Adjust image size for mobile */
    margin-bottom: 20px; /* Add margin between image and content on mobile */
  }
}
</style>
