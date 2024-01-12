

<template>


<div>

  <!-- putting all if's in one dive to make it easier to display the spinner -->
  <div v-if="education && education.length && workExperience && workExperience.length && skills && skills.length> 0" >
    
  
<!-- Banner Section -->
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
          <p class="edu-type">{{ eduItem.type }} : </p>
          <p class="edu-des">{{ eduItem.description }}</p> 
          <p class="edu-place">Place: {{ eduItem.place }}</p>
        </div>
      </div>

      <!-- Work Experience Section -->
      <div class="section exp">
        <h2>Work Experience</h2>
        <div v-for="workItem in workExperience" :key="workItem.year" class="exp-item">
          <h3>{{ workItem.year }}</h3>
          <p class="exp-occupation">{{ workItem.occupation }} : </p>
          <p class="exp-des"> {{ workItem.description }} </p> 
        </div>
      </div>

      <!-- Contact Section -->
      <div class="section contact">
        <h2>Contact</h2>
        <div class="contact-item" v-if="contact">
          <p class="contact-info" v-if="contact.address">
            <i class="fas fa-map-marker-alt"></i> <p class="addy">{{ contact.address }} </p>
          </p>
          <p class="contact-info" v-if="contact.phone">
            <i class="fas fa-phone"></i> <p class="phone"> {{ contact.phone }}</p>
          </p>
          <p class="contact-info" v-if="contact.email">
            <i class="fas fa-envelope"></i> <p class="email"> {{ contact.email }}</p>
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

  </div>

  <div v-else class="spinny">
      <div class="spinner-border"></div>
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
/* BANNER STYLES */
.banner {
  background-color: #005ae2;
  height: 140px; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
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
  border: 8px solid #005ae2;
}
.circle img {
  width: 200px; 
  height: 240px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

/* RESUME STYLES */
.resume {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  padding-top: 40px;
}

/* SECTION STYLES */
.section {
  width: 30%; 
  margin-bottom: 0px; 
}
.edu-item, .exp-item {
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: white;
  text-align: left;
  font-size: 15px;
}
.contact-item{
  margin-left: 100px;
  padding-top: 5px;
}

/* SKILLS SECTION STYLES */
.skills {
  width: 75%; 
  margin: 0 auto; 
  padding-top: 40px;
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 80px;
}
.skill-card {
  width: 48%; 
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
  padding-bottom: 20px;
}
h3 {
  font-size: 22px !important;
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
.edu-type, .edu-place, .edu-des, .exp-des, .exp-occupation, .skill-experience, .contact-info {
  margin: 5px 0;
  color: white;
  font-size: 18px;
}
.edu-type{
  font-weight: 800 !important;
  color: #3385ff;
  font-size: 20px;
}
.exp-occupation{
  font-weight: 600 !important;
  color: #3385ff;
  font-size: 20px;
}
/* icons styling */
.contact-info i {
  margin-right: 5px;
  color: #3385ff;
}
/* Contact Section STYLES */
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
  margin-right: 50px; 
  font-size: 24px;
}
.addy{
  padding: 10px;
  padding-top: 30px;
}
.phone{
  padding-top: 15px;
}
.email{
  padding-top: 15px;
}
.main-container {
  max-width: 2000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  padding-top: 40px;
}

/* Responsive adjustments */
@media (max-width: 786px) {
.resume {
  flex-direction: column;
}
.section {
  width: 100%;
  margin-bottom: 20px;
}
.banner {
  height: 100px;
}
.circle {
  width: 150px;
  height: 150px;
}
.circle img {
  width: 150px;
  height: 180px;
}
.contact-item {
 margin-left: 35px;
 margin-right: 35px;
}
.main-container {
  padding-top: 20px;
  justify-content: center;
  text-align: center;
  margin-left: 25px;
  margin-right: 25px;
}
.skills,
.contact {
  width: 100%;
  text-align: center; 
}
.skills-container {
  justify-content: center; 
}
.skill-card {
  width: 80%;
  margin-right: 18px;
}
.skill-experience{
  font-size: 18px;
}
.skillh2{
  margin-right: 25px;
}
h2{
  margin-right: 25px;
}

}

@media (max-width: 300px) {
.banner {
  height: 80px;
}
.circle {
  width: 100px;
  height: 100px;
}
.circle img {
  width: 100px;
  height: 120px;
}
.section {
  margin-bottom: 10px;
}
.edu-item,
.exp-item,
.contact-item,
.skill-card {
  width: 100%;
}
.spinny {
  margin-top: 100px;
}
}

</style>
