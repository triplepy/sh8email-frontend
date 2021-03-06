import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Help from '@/components/Help'
import Mails from '@/components/Mails'
import Mail from '@/components/Mail'

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
    },
    {
      path: '/recipient/:recipient/mails',
      name: 'Mails',
      component: Mails
    },
    {
      path: '/recipient/:recipient/mails/:id',
      name: 'Mail',
      component: Mail
    }
  ]
})
