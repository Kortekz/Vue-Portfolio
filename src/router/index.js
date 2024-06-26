import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
 {
   path: '/',
   name: 'home',
   component: HomeView
 },
 {
   path: '/about',
   name: 'about',
   component: AboutView
 },
 {
   path: '/projects',
   name: 'projects',
   component: ProjectsView
 },
 {
   path: '/resume',
   name: 'resume',
   component: ResumeView
 },
 {
   path: '/testimonials',
   name: 'testimonials',
   component: TestimonialsView
 },
 {
   path: '/contact',
   name: 'contact',
   component: ContactView
 }
]

const router = createRouter({
 history: createWebHashHistory(),
 routes
})

export default router
