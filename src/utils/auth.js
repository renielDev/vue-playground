import cookie from 'vue-cookies'
import axios from 'axios'


export default {
  login(username, password, callback) {

    if (username === 'reniel' && password === 'reniel') {
      cookie.set('token', 'testtoken');
      return callback(true)
    }

    return callback(false)
  },

  isLoggedIn(to, from, next) {
    if (cookie.get('token')) {
      return next('/')
    }
    return next()
  },

  logout(to, from, next) {
    cookie.set('token', '')
    return next('/login')
  }
}


export function requireAuth(to, from, next) {
  // console.log('auth')
  // console.log(cookie.get('token'))
  if (! cookie.get('token')) {
    return next({
      'path' : '/login',
      'query': { redirect: to.fullPath }
    })
  }

  return next()
}
