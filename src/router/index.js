import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/Home'
import NotFound from '@/views/404'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/HeadBar',
      name: 'HeadBar',
      component: HeadBar
    }, {
      path: '/NarBar',
      name: 'NarBar',
      component: NarBar
    }, {
      path: '/MainContent',
      name: 'MainContent',
      component: MainContent
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
