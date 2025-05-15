// src/auth.js

export default {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',

  login() {
    this.isAuthenticated = true
    localStorage.setItem('isAuthenticated', 'true')
  },

  logout() {
    this.isAuthenticated = false
    localStorage.setItem('isAuthenticated', 'false')
  }
}