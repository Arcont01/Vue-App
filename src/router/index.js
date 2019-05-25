import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Portafolio from '@/components/Portafolio'
import Proyectos from '@/components/Proyectos'
import Usuarios from '@/components/Usuarios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Portafolio',
      name: 'Portafolio',
      component: Portafolio
    },
    {
      path: '/Proyectos',
      name: 'Proyectos',
      component: Proyectos
    },
    {
      path: '/',
      name: 'Usuarios',
      component: Usuarios
    }
  ]
})
