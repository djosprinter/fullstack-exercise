import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Submit',
    component: () => import('../views/Submit.vue')
  },
  {
    path: '/result-list',
    name: 'ResultList',
    component: () => import('../views/ResultList.vue')
  },
  {
    path: '/findings',
    name: 'Findings',
    props: true,
    component: () => import('../views/Findings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
