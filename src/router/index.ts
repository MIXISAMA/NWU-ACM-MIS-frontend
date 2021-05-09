import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'




const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/publicity',
    name: 'Publicity',
    component: () => import('../views/Publicity.vue')
  },
  {
    path: '/train',
    name: 'Train',
    component: () => import('../views/Train.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    redirect: '/statistics/date-arrange',
    children: [
      {
        path: 'solve-problems',
        component: () => import('../views/Statistics/SolveProblems.vue')
      },
      {
        path: 'date-arrange',
        component: () => import('../views/Statistics/DateArrange.vue')
      },
      {
        path: 'rating',
        component: () => import('../views/Statistics/Rating.vue')
      },
      {
        path: 'person-data',
        component: () => import('../views/Statistics/PersonData.vue')
      },
      {
        name: 'person-detial',
        path: 'person-data/:id',
        component: () => import('../views/Statistics/PersonDetail.vue')
      }
    ],
    component: () => import('../views/Statistics.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
