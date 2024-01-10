<template>
  <div class="Testys">
    <div v-if="testimonials && testimonials.length > 0">
      <!-- Chunk of code to display the first object in testimonials array -->
      <div class="textHome" v-if="testimonials[0].title && testimonials[0].description">
        <div>
          <h1 class="title">{{ testimonials[0].title }}</h1>
        </div>
        <div>
          <p class="Description">{{ testimonials[0].description }}</p>
        </div>
      </div>

      <!-- Testimonial container for cards -->
      <div class="testimonial-container">

        <div v-for="(info, index) in testimonials.slice(1)" :key="info.name" class="card">
         
          <div class="image-container">
          <img class="testimonialImage" :src="info.profile" alt="Cover Image">
         </div>
         
          <div class="card-content">
            <p class="name">{{ info.fullName }} </p>
            <p class="quote">{{ info.quotes }}</p>
          </div>
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
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch('fetchTestimonials');
  },
};
</script>

<style>
.title {
  color: #005ae2;
}
.Description {
  color: white;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 50px;
}
/* Card styles */
.testimonial-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1200px; /* Adjust as needed */
}
.image-container {
  width: 100%;
  height: 250px; /* Set a fixed height for the images */
  overflow: hidden;
  padding: 20px;
  margin-bottom: 20px;
}
.testimonialImage {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensure images fill the container while maintaining aspect ratio */
}
.card {
  width: calc(33.33% - 20px); 
  margin: 20px 0;
  border: 2px solid white !important;
  padding: 20px;
  border-radius: 8px;
  overflow: hidden;
  background-color: transparent !important;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
}
.card img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.card-content {
  text-align: center;
}
.name {
  font-weight: bold;
  margin-bottom: 5px;
  color: white;
}
.quote {
  font-style: italic;
  color: white;
  margin: auto;
}
.Testys{
  padding-bottom: 150px;
}
@media screen and (max-width: 768px) {
  .card {
  width: calc(40% - 20px); /* For smaller screens, two cards in a row */
  margin-left: 20px;
  margin-right: 20px;
  }
  .card-content {
    font-size: 8px; /* Adjust font size for smaller screens */
  }
  .card img {
    min-width: 100px; /* Set a minimum width for the image */
    max-width: 80%; /* Set a maximum width to ensure responsiveness */
    height: auto;
    margin-bottom: 10px;
  }
}
</style>
