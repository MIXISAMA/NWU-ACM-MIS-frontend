import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/home',
  },
  {
    path: '/announcement',
    name: 'Announcement',
    component: () => import('@/views/Announcement.vue'),
  },
  {
    path: '/honor',
    name: 'Honor',
    component: () => import('@/views/Honor.vue'),
  },
  {
    path: '/problemset',
    name: 'Problemset',
    component: () => import('@/views/Problemset.vue'),
  },
  {
    path: '/contests',
    name: 'Contests',
    component: () => import('@/views/Contests.vue'),
  },
  {
    path: '/rating',
    name: 'Rating',
    component: () => import('@/views/Rating.vue'),
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('@/views/Groups.vue'),
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('@/views/Statistics.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
