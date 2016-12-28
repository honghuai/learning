import Vue from 'vue'
import store from './store'
import vuex from './vuex.vue'

new Vue({
    el: '#app',
    store,
    // render: xx=>xx(vuex)
    render: function(fn) {
        console.log(fn);//function (a, b, c, d) { return createElement(vm, a, b, c, d, true); }
        return fn(vuex);
    }
})