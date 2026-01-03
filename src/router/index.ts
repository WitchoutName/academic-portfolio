import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const MaliciousDomainsPage = () => import('@/pages/MaliciousDomainsPage.vue')
const EstimatingAirwaysPage = () => import('@/pages/EstimatingAirwaysPage.vue')
const OsuNeurInPage = () => import('@/pages/OsuNeurInPage.vue')
const NotFoundPage = () => import('@/pages/NotFoundPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/malicious-domains', name: 'malicious-domains', component: MaliciousDomainsPage },
    { path: '/estimating-airways', name: 'estimating-airways', component: EstimatingAirwaysPage },
    { path: '/osu-neur-in', name: 'osu-neur-in', component: OsuNeurInPage },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
  ],
})

export default router
