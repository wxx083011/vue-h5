import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => {
  // console.log(to, from)
  // if (to.name === 'reportDetail') {
  //   from.meta.keepAlive = true
  // } else {
  //   from.meta.keepAlive = false
  // }
})
export default router