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

        <div v-for="info in testimonials.slice(1)" :key="info.name" class="card">
         
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
  padding-bottom: 20px;
}
/* Card styles */
.testimonial-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1400px; /* Adjust as needed */
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
  width: calc(33.33% - 80px); 
  margin: 40px 0px;
  border: 2px solid transparent !important;
  padding: 15px;
  border-radius: 25px !important;
  overflow: hidden;
  background-color: transparent !important;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  transition: 0.3s;
}
.card:hover{
  box-shadow: 0 0 20px rgb(0, 90, 226, 0.8);
  transition: 0.5s;
  transform: scale(1.05); 
}
.card img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.card-content {
  text-align: center;
  padding: 20px;
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
  .image-container {
    height: 100px; /* Adjust the height of the image container */
    margin-bottom: 10px; /* Adjust the margin between the image container and card content */
  }
  .testimonialImage {
    max-height: 100%; /* Ensure images fill the container vertically */
  }
  .card-content {
    font-size: 8px; /* Adjust font size for smaller screens */
  }
  .card img {
    max-width: 100%; /* Set a maximum width to ensure responsiveness */
    height: auto;
    margin-bottom: 0; /* Remove margin below the images */
  }
}

@media screen and (max-width: 300px) {
  .testimonial-container {
    justify-content: center;
  }
  .card {
    width: calc(80% - 20px); /* Adjust the width for smaller screens */
    margin: 20px 0px;
  }
  .image-container {
    height: 120px; /* Adjust the height of the image container */
  }
  .testimonialImage {
    max-height: 100%; /* Ensure images fill the container vertically */
  }
  .card-content {
    font-size: 10px; /* Adjust font size for smaller screens */
  }
  .card img {
    max-width: 100%; /* Set a maximum width to ensure responsiveness */
    height: auto;
    margin-bottom: 0; /* Remove margin below the images */
  }
}

</style>
