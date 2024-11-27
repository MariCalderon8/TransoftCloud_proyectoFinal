import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import GestorRutas from '@/views/GestorRutas.vue'
import GestorVehiculos from '@/views/GestorVehiculos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/gestor-rutas',
      name: 'GestorRutas',
      component: GestorRutas,
    },
    {
      path: '/gestor-vehiculos',
      name: 'GestorVehiculos',
      component: GestorVehiculos,
    }
  ],
})

export default router
