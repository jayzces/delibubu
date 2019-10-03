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
            path: '/search',
            name: 'Search',
            component: require('@/pages/Search').default
        }, {
            path: '*',
            redirect: {
                name: 'home'
            }
        }
    ]
})