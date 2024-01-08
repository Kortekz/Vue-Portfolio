import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

// Creating a link element to import the Google Fonts stylesheet
let head = document.head;
let link = document.createElement('link');
link.rel = "preload"; // Setting rel to preload for font optimization
link.href = 'https://fonts.googleapis.com/css?family=Gantari';
head.appendChild(link);

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
