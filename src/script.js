import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'

var VueScrollTo = require('vue-scrollto')

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
    duration: 100
})

new Vue({
    router: Router,
    store: Store,
    render: function (createElement) {
        return createElement(App)
    }
}).$mount('#app')