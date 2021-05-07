import { createRouter, createWebHistory } from 'vue-router'
import { users } from '../assets/users'
import store from '../store'
import Home from '../views/Home.vue'
import UserLogin from '../views/UserLogin'
import Admin from '../views/Admin'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user/:userId',
    name: 'UserLogin',
    component: UserLogin,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user
  if (!user) {
    await store.dispatch('User/setUser', users[0])
  }
  const isAdmin = true
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin)
  if (requiresAdmin && !isAdmin) next({ name: 'Home' })
  else next()
})

export default router
