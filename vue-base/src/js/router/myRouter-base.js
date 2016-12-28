/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 * 简单一级菜单
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const First = {
    template: '<div>first内容</div>'
}
const Second = {
    template: '<div>second内容</div>'
}
const Home = {
    template: '<div>home的内容</div>'
}

const router = new VueRouter({
    mode: 'history',
    base: __dirname,//nodejs指当前本地路径
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/first',
            component: First
        },
        {
            path: '/second',
            component: Second
        }
    ]
})

new Vue({
    router,
    template: `
    <div id='r'>
        <h1>导航</h1>
        <ul>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/first">first</router-link></li>
            <li><router-link to="/second">second</router-link></li>
        </ul>
        <router-view class="wrap"></router-view>
    </div>
    `
}).$mount('#app')