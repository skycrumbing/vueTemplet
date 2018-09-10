import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about.vue'
import count from '@/components/count.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/about',
        name: 'about',
        component:about
    },
    {
        path: '/count',
        name: 'count',
        component:count
    }
  ]
})
