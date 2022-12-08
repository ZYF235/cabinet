import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/Index.vue')
    },
    {
        path: '/message/chat',
        name: 'chatMessage',
        component: () => import('@/views/Message/Chat')
    },
    {
        path: '/message/start',
        name: 'startMessage',
        component: () => import('@/views/Message/Start')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
