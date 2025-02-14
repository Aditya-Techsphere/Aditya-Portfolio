import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/skills', name: 'Skills', component: () => import('../views/Skills.vue') },
  { path: '/experience', name: 'Experience', component: () => import('../views/Experience.vue') },
  { path: '/education', name: 'Education', component: () => import('../views/Education.vue') },
  { path: '/certifications', name: 'Certifications', component: () => import('../views/Certifications.vue') },
  { path: '/knowledge-base', name: 'KnowledgeBase', component: () => import('../views/KnowledgeBase.vue') },
  { path: '/connect', name: 'Connect', component: () => import('../views/Connect.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;