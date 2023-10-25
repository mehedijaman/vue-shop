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
          // component: () => import('../views/Shop.vue')
        },
        {
          path:'shop',
          name: 'shop',
          component: () => import('../views/Shop.vue')
        },
        {
          path:'shop/category/:category',
          name: 'category-shop',
          component: () => import('../views/Shop.vue')
        },
        {
          path:'product/list',
          name: 'product-list',
          component: () => import('../components/product/ProductList.vue')
        },
        {
          path:'product/details/:id',
          name: 'product-details',
          component: () => import('../components/product/ProductDetails.vue')
        },
        {
          path:'cart',
          name: 'cart',
          component: () => import('../views/Cart.vue')
        },
        {
          path:'wishlist',
          name: 'wishlist',
          component: () => import('../views/WishList.vue')
        },
        {
          path:'checkout',
          name: 'checkout',
          component: () => import('../views/Checkout.vue')
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
