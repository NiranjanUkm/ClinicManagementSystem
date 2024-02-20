import { createRouter, createWebHashHistory } from 'vue-router'
import Doctor from '../views/Doctor.vue';
import Reception from '../views/Reception.vue';
import Home from '../views/Home.vue';
import DocLogin from '../views/Login/DocLogin.vue';
import ReceptionLogin from '../views/Login/ReceptionLogin.vue';

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/doc-login',
    component:DocLogin
  },
  {
    path:'/reception-login',
    component:ReceptionLogin
  },
  {
    path:'/doctor',
    component:Doctor
  },
  {
    path:'/reception',
    component:Reception
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
