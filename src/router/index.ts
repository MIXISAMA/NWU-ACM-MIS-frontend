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
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/person-data/:id',
    name: 'person-detial',
    component: () => import('../views/PersonDetail.vue')
  },
  {
    path: '/train/:title',
    name: 'train-detial',
    component: () => import('../views/TrainDetail.vue')
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
        path: 'train',
        component: () => import('../views/Statistics/Train.vue')
      },
      // {
      //   path: 'train/:title',
      //   name: 'train-detial',
      //   component: () => import('../views/Statistics/TrainDetail.vue')
      // },
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
