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
    path: '/statistics',
    name: 'Statistics',
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
        path: 'contribution',
        component: () => import('../views/Statistics/Contribution.vue')
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