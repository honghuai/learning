/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 * 多级菜单
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const First = {
    template: '<div>first内容</div>'
}
const First1 = {
    template: '<div>first子菜单内容1</div>'
}
const First2 = {
    template: '<div>first子菜单内容2</div>'
}
const Second = {
    template: '<div>second内容</div>'
}
const Home = {
    template: '<div>home的内容</div>'
}

const test_a = {
    template: `
        <div class="testa">
            <h2>组件</h2>
            <router-view class="testaa"></router-view>
        </div>
    `
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
            component: test_a,
            children: [
                {
                    path: '/',
                    component: First
                },
                {
                    path: '1',
                    component: First1
                },
                {
                    path: '2',
                    component: First2
                }
            ]
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
                <ol>
                    <li><router-link to="/first/1">first</router-link></li>
                    <li><router-link to="/first/2">second</router-link></li>
                </ol>
            <li><router-link to="/second">second</router-link></li>
        </ul>
        <router-view class="wrap"></router-view>
    </div>
    `
}).$mount('#app')