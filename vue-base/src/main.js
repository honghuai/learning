/**
 * Created by dell on 2016/12/19.
 * 整个项目的入口
 *
 * import Vue from 'vue'
 * import store from './store/index'
 * import VueRouter from 'vue-router'
 *
 *
 * //单页模板
 * import Creat from './view/xx.vue'
 * import ErrorPage from './view/error.vue'
 *
 * const router = new VueRouter
 * new Vue({
 *  router,
 *  store,
 *  template:``,
 *  data(){},
 *  mounted: function() {
 *  //无法寻找到服务器，自动跳转到错误页面：errorPage
 *  if(this.$store.state.serverIp === 0) {router.push({path: '/ErrorPage'})}
 *  }
 * }).$mount('#app')
 *
 *
 */
import Vue from '../node_modules/vue/dist/vue.js'
import App from './app.vue'
//var App = require('app.vue');
new Vue({
    el: '#app',
    data: {
        msg: "this is msg"
    },
    components: { App }
})