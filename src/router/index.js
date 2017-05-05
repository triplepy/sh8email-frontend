import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Help from '@/components/Help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    }
  ]
})
