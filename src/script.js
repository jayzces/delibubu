import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'

var VueScrollTo = require('vue-scrollto')

Vue.config.productionTip = false

Vue.use(VueScrollTo, { duration: 100 })

Vue.filter('currency', value => {
    let floatValue = parseFloat(value).toFixed(2),
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        stringValue = floatValue.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return `PHP ${stringValue}`
})

new Vue({
    router: Router,
    store: Store,
    render: function (createElement) {
        return createElement(App)
    }
}).$mount('#app')