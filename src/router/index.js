import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import DashboardPage from '../components/DashboardPage.vue'
import auth from '../auth'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: { transition: 'slide-right' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),  // <-- Use hash history here
  routes
})

// 🔒 Global guard for all protected routes
router.beforeEach((to, from, next) => {
  if (to.path === '/dashboard' && !auth.isAuthenticated) {
    next('/')  // Redirect to login page
  } else {
    next()  // Proceed with route navigation
  }
})

export default router
