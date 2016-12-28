/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 * 路由的别名alias
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Third = {
    template: `
        <div>
             Third
        </div>
    `
}
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/third',
            component: Third,
            alias: ['/third_vue','/third_vue2']
        }
    ]
})
new Vue({
    router,
    template: `
        <div>
            <ol>
                <li><router-link to="/third_vue">/third or  /third_vue</router-link></li>
                <li><router-link to="/third_vue2">/third or  /third_vue</router-link></li>
            </ol>
            <router-view></router-view>

        </div>
    `
}).$mount("#app");