import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Events from '@/components/Events'
import LogInMenu from '@/components/LogInMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/event-list',
      name: 'Events',
      component: Events
    },
    {
      path: '/log-in-menu',
      name: 'LogInMenu',
      component: LogInMenu
    }
  ]
})
