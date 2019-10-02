import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'

Vue.config.productionTip = false

new Vue({
    router: Router,
    store: Store,
    render: function (createElement) {
        return createElement(App)
    }
}).$mount('#app')