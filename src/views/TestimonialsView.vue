<template>


  <div class="Testys">

    <!-- allows me to make use of spinner easier -->
    <div v-if="testimonials && testimonials.length > 0">

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

    <div v-else class="spinny">
      <div class="spinner-border"></div>
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
.spinny {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 300px; */
  margin-top: 200px;
}
.spinner-border {
  color: white;
  text-align: center;
}
.title {
  color: #005ae2;
}
.Description {
  color: white;
  font-size: 24px;
  padding-top: 20px;
  padding-bottom: 20px;
}
/* Card styles */
.testimonial-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1400px; 
}
.image-container {
  width: 350px;
  height: 250px; 
  /* overflow: hidden; */
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 25px; /* Added border-radius */
}
.testimonialImage {
  width: 100%; /* Use full width of the container */
  height: auto; /* Automatically adjust height to maintain aspect ratio */
  object-fit: cover; /* Fill the container while maintaining aspect ratio */
  border-radius: 25px; /* Added border-radius */
}
.card-content{
  margin-top: 50px;
}

.card {
  width: calc(33.33% - 80px); 
  margin: 40px 0px;
  border: 2px solid transparent !important;
  padding: 20px;
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
  height: 145%;
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
  font-size: 24px;
}
.quote {
  font-style: italic;
  color: white;
  margin: auto;
  font-size: 22px;
}
.Testys{
  padding-bottom: 150px;
}
/* Media query for mobile responsiveness */
@media screen and (max-width: 767px) {
  .card {
  width: calc(40% - 20px); 
  margin-left: 20px;
  margin-right: 20px;
  }
  .image-container {
  height: 300px; 
  margin-bottom: -60px;
  }
  .testimonialImage {
  max-height: 100%; 
  }
  .card-content {
  font-size: 12px;
  }
  .card img {
  width: 230px;
  height: 300px;
  margin-bottom: 10px;
  margin-left: -120px;
  } 
  .quote{
    font-size: 14px;
  }
  .name{
    font-size: 16px;
  }
}
/* Media query for mobile responsiveness */
@media screen and (max-width: 450px) {
  .Description {
  color: white;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.quote {
  font-style: italic;
  color: white;
  margin: auto;
  font-size: 13px;
}
.title {
  color: #005ae2;
  margin-top: 30px;
}
  .testimonial-container {
  justify-content: center;
  }
  .card {
  width: calc(80% - 20px); 
  margin: 20px 0px;
  }
  .image-container {
  height: 200px; 
  margin-bottom: -60px;
  }
  .testimonialImage {
  max-height: 100%; 
  }
  .card-content {
  font-size: 12px;
  }
  .card img {
  width: 150px;
  height: 180px;
  margin-bottom: 10px;
  margin-left: -100px;
  } 
}
/* Responsiveness for 400px */
@media screen and (max-width: 400px) {
  .Description {
  color: white;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.quote {
  font-style: italic;
  color: white;
  margin: auto;
  font-size: 13px;
}
.title {
  color: #005ae2;
  margin-top: 30px;
}
  .testimonial-container {
  justify-content: center;
  }
  .card {
  width: calc(80% - 20px); 
  margin: 20px 0px;
  }
  .image-container {
  height: 300px; 
  margin-bottom: -60px;
  }
  .testimonialImage {
  max-height: 100%; 
  }
  .card-content {
  font-size: 12px;
  }
  .card img {
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
  margin-left: -100px;
  } 
}
/* responsiveness for mobiles on 300px */
@media screen and (max-width: 320px) {
  .testimonial-container {
  justify-content: center;
  }
  .card {
  width: calc(80% - 20px); 
  margin: 20px 0px;
  }
  .image-container {
  height: 200px; 
  margin-bottom: -60px;
  }
  .testimonialImage {
  max-height: 100%; 
  }
  .card-content {
  font-size: 12px;
  margin-top: 10px;
  }
  .card img {
  width: 180px;
  height: 180px;
  margin-bottom: 0px;
  margin-top: -20px;
  margin-left: -160px;
  } 
  .quote{
    font-size: 14px;
    width: auto !important;
  }
}
</style>
