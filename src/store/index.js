import { createStore } from 'vuex'
const dataAPI = 'https://kortekz.github.io/vueData/' 

export default createStore({
  state: {
    home: [],
    skills: [],
    testimonials: [],
    projects: [],
    education: [],
    workExperience: [],
    image:[],
    contact:[]
  },
  getters: {
  },
  mutations: {
    setHome(state, value) { 
    state.home = value 
    },
    setTestimonials(state, value) { 
      state.testimonials = value 
    },
    setProjects(state, value) { 
     state.projects = value 
    },
    setEducation(state, value) { 
      state.education = value 
     },
    setSkills(state, value) { 
      state.skills = value 
    },
    setWorkExperience(state, value) { 
      state.workExperience = value 
    },
    setImage(state, value) { 
      state.image = value 
    },
    setContact(state, value) { 
      state.contact = value 
    },
  },
  actions: {
    // Getting home data
    async fetchHome(context) {
      try {
        let res = await fetch(dataAPI);
        let { home } = await res.json();
        context.commit('setHome', home);
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    },
    // getting testimonial data
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataAPI);
        let { testimonials } = await res.json();
        context.commit('setTestimonials', testimonials);
      } catch (error) {
        console.error('Error fetching Testimonials data:', error);
      }
    },
    // getting projects data
    async fetchProjects(context) {
      try {
        let res = await fetch(dataAPI);
        let { projects } = await res.json();
        context.commit('setProjects', projects);
      } catch (error) {
        console.error('Error fetching Project data:', error);
      }
    },
    // getting education data
    async fetchEducation(context) {
      try {
        let res = await fetch(dataAPI);
        let { education } = await res.json();
        context.commit('setEducation', education);
      } catch (error) {
        console.error('Error fetching Education data:', error);
      }
    },
    // getting skills data
    async fetchSkills(context) {
      try {
        let res = await fetch(dataAPI);
        let { skills } = await res.json();
        context.commit('setSkills', skills);
      } catch (error) {
        console.error('Error fetching Skills data:', error);
      }
    },
    // getting workExperience data
    async fetchWorkExperience(context) {
      try {
        let res = await fetch(dataAPI);
        let { workExperience } = await res.json();
        context.commit('setWorkExperience', workExperience);
      } catch (error) {
        console.error('Error fetching Work Experience data:', error);
      }
    },
    // for corne image
    async fetchImage(context) {
      try {
        let res = await fetch(dataAPI);
        let { image } = await res.json();
        context.commit('setImage', image);
      } catch (error) {
        console.error('Error fetching Work image data:', error);
      }
    },
    // getting contact data
    async fetchContact(context) {
      try {
        let res = await fetch(dataAPI);
        let { contact } = await res.json();
        context.commit('setContact', contact);
      } catch (error) {
        console.error('Error fetching Work contact data:', error);
      }
    },
  },
})
