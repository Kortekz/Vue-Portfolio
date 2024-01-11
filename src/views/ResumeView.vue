

<template>

  
<div class="banner">
      <div class="banner-content">
        <div class="circle">
          <img :src="corneImage" alt="Your Image">
        </div>
      </div>
    </div>


  <div class="main-container">


    <div class="resume">
      <!-- Education Section -->
      <div class="section edu">
        <h2>Education</h2>
        <div v-for="eduItem in education" :key="eduItem.id" class="edu-item">
          <h3>{{ eduItem.year }}</h3>
          <p class="edu-type">{{ eduItem.type }}: {{ eduItem.description }}</p>
          <p class="edu-place">Place: {{ eduItem.place }}</p>
        </div>
      </div>

      <!-- Work Experience Section -->
      <div class="section exp">
        <h2>Work Experience</h2>
        <div v-for="workItem in workExperience" :key="workItem.year" class="exp-item">
          <h3>{{ workItem.year }}</h3>
          <p class="exp-occupation">{{ workItem.occupation }}: {{ workItem.description }}</p>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="section contact">
        <h2>Contact</h2>
        <div class="contact-item">
          <p class="contact-info">
            <i class="fas fa-map-marker-alt"></i> {{ contact.address }}
          </p>
          <p class="contact-info">
            <i class="fas fa-phone"></i> {{ contact.phone }}
          </p>
          <p class="contact-info">
            <i class="fas fa-envelope"></i> {{ contact.email }}
          </p>
        </div>
      </div>

    
      <!-- Skills Section -->
      <div class="section skills">
        <h2 class="skillh2">Skills</h2>
        <div class="skills-container">
          <div v-for="skillItem in skills" :key="skillItem.title" class="skill-card">
            <h3>{{ skillItem.title }}</h3>
            <p class="skill-experience">{{ skillItem.experience }}</p>
          </div>
        </div>
      </div>

    </div>

  </div>


</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills;
    },
    workExperience() {
      return this.$store.state.workExperience;
    },
    contact() {
      return this.$store.state.contact[0] || {};
    },
    corneImage() {
      return this.$store.state.image[0]?.corne || 'fallback_image_url.jpg';
    },
  },
  mounted() {
    this.$store.dispatch('fetchEducation');
    this.$store.dispatch('fetchSkills');
    this.$store.dispatch('fetchWorkExperience');
    this.$store.dispatch('fetchContact');
    this.$store.dispatch('fetchImage');
  },
};
</script>

<style scoped>

/* BANNER STYLES */
.banner {
  background-color: #005ae2; /* Blue color for the banner */
  height: 140px; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.banner-content {
  text-align: center;
}
.circle {
  width: 200px; 
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #005ae2;;
}
.circle img {
  width: 200px; /* Adjust the size of the image */
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

/* RESUME STYLES */
.resume {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  justify-content: space-between;
  padding-top: 40px;
}

/* SECTION STYLES */
.section {
  width: 30%; /* Adjust the width as needed */
  margin-bottom: 0px; /* Adjust margin as needed */
}
.edu-item, .exp-item, .contact-item {
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: white;
  text-align: left;
  font-size: 15px;
}

/* SKILLS SECTION STYLES... */
.skills {
  width: 75%; /* Adjust the width to take full width */
  margin: 0 auto; /* Center the skills section */
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 80px;
}
.skill-card {
  width: 48%; /* Adjust the width based on your preference */
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  font-size: 16px;
  background-color: #333;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  transition: 0.3s;
}
.skill-card:hover {
  box-shadow: 0 0 20px rgba(0, 90, 226, 0.8);
  transition: 0.5s;
  transform: scale(1.05);
}
h2 {
  color: white;
  font-size: 24px;
}
h3 {
  font-size: 18px;
}
.skillh2{
  padding-bottom: 40px;
}
.skill-experience {
  font-size: 14px;
}

h2 {
  color: white;
  font-size: 24px;
}

h3 {
  font-size: 18px;
}
.skill-experience{
  font-size: 14px;
}

.edu-type, .edu-place, .exp-occupation, .skill-experience, .contact-info {
  margin: 5px 0;
  color: white;
  font-size: 18px;
}
/* Add FontAwesome icons styling */
.contact-info i {
  margin-right: 5px;
}
/* Contact Section STYLES... */
.contact {
  width: 30%;
  margin-bottom: 0px;
}
.contact-info {
  margin: 5px 0;
  color: white;
  display: flex;
  align-items: center;
  font-size: 18px;
}
.contact-info i {
  margin-right: 10px; /* Adjust the space between icon and text */
  font-size: 24px; /* Adjust the icon size */
}
.main-container {
  max-width: 2000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; /* Align children vertically */
  align-items: center; /* Center content horizontally */
  padding-top: 40px;
}

</style>
