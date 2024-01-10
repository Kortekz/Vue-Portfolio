import { createStore } from 'vuex'
const dataAPI =  'https://kortekz.github.io/vueData/'

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
    
  },
})
