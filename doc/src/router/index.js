import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import signup from '@/components/signup'
import profile from '@/components/profile'
import patient from '@/components/patient'
import symptoms from '@/components/symptoms'
import plogin from '@/components/plogin'
import modal from '@/components/modal'
import symptoms1 from '@/components/symptoms1'
import history from '@/components/history'
import history1 from '@/components/history1'





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
      name: '/home',
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
    },
    {
      path: '/modal',
      name: 'modal',
      component: modal
    },
    {
      path: '/symptoms1',
      name: 'symptoms1',
      component: symptoms1
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/history1',
      name: 'history1',
      component: history1
    }
  ]
})
