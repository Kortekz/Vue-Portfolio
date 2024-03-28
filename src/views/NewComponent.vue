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
	  <h2>Download My Resume Below!</h2>
	  <div class="contact-item">
	    <button class="resume-button" @click="downloadResume">Resume</button>
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

<script setup lang="ts">
defineProps<{ 
	corneImage: any;
	downloadResume: () => void;
}>()
const education = defineModel<any>('education', { required: true })
const workExperience = defineModel<any>('workExperience', { required: true })
const skills = defineModel<any>('skills', { required: true })
</script>
