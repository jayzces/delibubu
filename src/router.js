import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('@/pages/Home').default
        }, {
            path: '/food-pickup-and-delivery',
            name: 'food-pickup',
            component: require('@/pages/FoodPickup').default
        }, {
            path: '/restaurant',
            name: 'restaurant',
            component: require('@/pages/RestaurantPage').default
        }, {
            path: '/notifications',
            name: 'notifications',
            component: require('@/pages/NotificationsPage').default
        }, {
            path: '*',
            redirect: {
                name: 'home'
            }
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})