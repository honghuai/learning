/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 * 路由中参数的传递
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const First = {
    template: '<div>first内容</div>'
}
const First1 = {
    template: '<div>first子菜单内容1-{{$route.name}}/{{$route.params.id}}/{{$route.params.title}}</div>'
}
const First2 = {
    template: '<div>first子菜单内容2/{{$route.params.id}}/{{$route.params.title}}</div>'
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
            name: 'Home',
            component: Home
        },
        {
            path: '/first',
            //name: 'Home-first',//存在children子菜单，所以该处不起作用
            component: test_a,
            children: [
                {
                    path: '/',
                    name: 'Home-first0',
                    component: First
                },
                {
                    path: '1',
                    name: 'Home-first1',
                    component: First1
                },
                {
                    path: '2',
                    name: 'Home-first2',
                    component: First2
                }
            ]
        },
        {
            path: '/second',
            name: 'Home-second',
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
                <ol>
                    <li><router-link :to='{name:"Home-first1",params:{id:11,title: "地址1"}}'>first</router-link></li>
                    <li><router-link :to='{name: "Home-first2",params:{id:22,title: "地址2"}}'>second</router-link></li>
                </ol>
            <li><router-link to="/second">second</router-link></li>
        </ul>
        <router-view class="wrap"></router-view>
    </div>
    `
}).$mount('#app')