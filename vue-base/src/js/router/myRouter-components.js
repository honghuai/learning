/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 *路由表的组件群
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
const Test = {
    template: '<div>test的内容</div>'
}
const router = new VueRouter({
    mode: 'history',
    base: __dirname,//nodejs指当前本地路径
    routes: [
        {
            path: '/',
            components: {//由于下面会用到多个component所以此处以复数形式存在。区别于单个组件方式下的component，是不加s
                default: Home,
                left: First,
                right: Second
            }
        },
        {
            path: '/first',
            components: {
                default: Test,
                left: Second,
                right: First
            }
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
        <p>{{$route.name}}</p>
        <p>{{$route.xx}}</p>
        <ul>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/first">first</router-link></li>
            <li><router-link to="/second">second</router-link></li>
        </ul>
             <router-view class="wrap"></router-view>

            <router-view class="wrap" name="left" style="float: left;width: 50%;background-color: #555;height: 300px;"></router-view>
            <router-view class="wrap" name="right" style="float: left;width: 50%;background-color: #eee;height: 300px;"></router-view>
    </div>
    `
}).$mount('#app')