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

  isLoggedIn() {
    console.log(cookie.get('token'))
  },

  logout() {
    cookie.set('token', '')
  }
}


export function requireAuth(to, from, next) {
  console.log(cookie.get('token'))
  if (! cookie.get('token')) {
    next({
      'path' : '/',
      'query': {redirect: to.fullPath}
    })
  }

  next()
}
