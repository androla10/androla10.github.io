import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/AboutSection.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/AboutSection.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../components/ResumeSection.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../components/SkillsSection.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/ServicesSection.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/ContactSection.vue')
    }
  ]
})

export default router
