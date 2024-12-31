import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorNotFound from '@/views/ErrorNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMach(.*)*',
      name: '404',
      component: ErrorNotFound,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/opiniones',
      name: 'opiniones',
      component: () => import('../views/Opiniones.vue'),
    },
    {
      path: '/opiniones/:gameName',
      name: 'crear',
      component: () => import('../views/Crear.vue'),
    },
    {
      path: '/administracion',
      name: 'administracion',
      component: () => import('../views/Administracion.vue'),
    },
  ],
})

export default router
