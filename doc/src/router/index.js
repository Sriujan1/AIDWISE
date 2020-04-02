import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import signup from '@/components/signup'
import home from '@/components/home'
import profile from '@/components/profile'
import patient from '@/components/patient'
import symptoms from '@/components/symptoms'
import plogin from '@/components/plogin'




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/patient',
      name: 'patient',
      component: patient
    },
    {
      path: '/symptoms',
      name: 'symptoms',
      component: symptoms
    },
    {
      path: '/plogin',
      name: 'plogin',
      component: plogin
    }
  ]
})
