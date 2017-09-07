import Vue from 'vue'
import Router from 'vue-router'
import button from '@/components/button'
import attend from '@/components/attend'
import login from '@/pages/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
		path:'/button',
		name:'button',
		component:button
    }
  ]
})
