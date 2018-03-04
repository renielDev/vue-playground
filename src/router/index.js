import Vue from 'vue'
import Router from 'vue-router'
import { requireAuth } from '@src/utils/auth'
import Hello from '@components/hello'
import Dashboard from '@components/dashboard'
import Login from '@components/login'
import Todo from '@components/todo/todo'
import Item from '@components/product/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },

    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: requireAuth,
      children: [
        {
          path: '',
          component: Hello
        },
        {
          path: 'todo/item',
          component: Item,
        },
        {
          path: 'todo',
          component: Todo,
        }
      ]
    },
  ]
})
