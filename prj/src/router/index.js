import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import task from '@/pages/Task.vue'
import product from '@/pages/Product.vue'
import cart from '@/pages/Cart.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/task',
        name: 'task',
        component: task
    },
    {
        path: '/product',
        name: 'product',
        component: product
    },
    {
        path: '/cart',
        name: 'cart',
        component: cart
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router