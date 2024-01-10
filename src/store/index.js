import { createStore } from 'vuex'
const dataAPI = 'https://kortekz.github.io/vueData/' 

export default createStore({
  state: {
    home: [],
    skills: [],
    testimonials: [],
    projects: []
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
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataAPI);
        let { testimonials } = await res.json();
        context.commit('setTestimonials', testimonials);
      } catch (error) {
        console.error('Error fetching Testimonials data:', error);
      }
    },
    
  },
})
