import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/form'
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/UserSettingsForm.vue')
  },
  {
    path: '/picker',
    name: 'picker',
    component: () => import('@/views/DataPicker.vue')
  },
  {
    path: '/window',
    name: 'window',
    component: () => import('@/views/modal.vue')
  },
  {
    path: '/portal2',
    name: 'portal',
    component: () => import('@/views/reusingPortals/UserSettingForm.vue')
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('@/views/mediaCard/main.vue')
  },
  {
    path: '/contactList',
    name: 'contactList',
    component: () => import('@/views/contactList/main.vue')
  },
  {
    path: '/render',
    name: 'render',
    component: () => import('@/views/render/render.vue')
  },
  {
    path: '/fetchjson',
    name: 'fetcjjson',
    component: () => import('@/views/fectchJson/main.vue')
  },
  {
    path: '/renderless',
    name: 'render2',
    component: () => import('@/views/ renderlessComponents/main.vue')
  },
  {
    path: '/inject',
    name: 'inject',
    component: () => import('@/views/CompoundComponents/main.vue')
  },
  {
    path: '/draggable',
    name: 'draggable',
    component: () => import('@/views/draggable/main.vue')
  },
  {
    path: '/searchSelect',
    name: 'searchSelect',
    component: () => import('@/views/searchSelect/main.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
