import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children:[
        {
          path:'',
          name: 'home',
          component: () => import('../views/Home.vue')
        },
        {
          path:'shop',
          name: 'shop',
          component: () => import('../views/Shop.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/About.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/Blog.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/Contact.vue')
        }
      ],
    },
    
  ]
})

export default router
