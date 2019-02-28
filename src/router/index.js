import Vue from 'vue'
import Router from 'vue-router'
import mainTop from '@/components/mainTop'
import worksBlock from '@/components/worksBlock'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainTop',
      component: mainTop
    },
    {
      path: '/works',
      name: 'Works',
      component: worksBlock
    }
  ]
})
