/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 * 父子孙组件,tag append exact query
 * name && params 必须同时存在
 * path && query  必须同时存在
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


const users = {
    template: `
    <div>
        <h3> Users 组件.</h3>
        <router-view></router-view>
    </div>
`
};
const user = {
    template: `
    <div>
    {{$route.params.username}}
    </div>
`
};
const Home = {
    template: `
    <div>this is home content....</div>
`
};
const append = {
    template: `
    <div>this is append content....</div>
`
};

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },{
            path: 'about',
            name: 'append',
            component: append
        },{
            path: '/users',
            component: users,
            children: [
                {
                    path: ':username',
                    name: 'user',
                    component: user
                }
            ]
        }
    ]
})
new Vue({
    router,
    template: `
        <div class="wrap"> 
            <h1>导航</h1>
             <ol>
              <li><router-link to="/">/</router-link></li>
              <li><router-link to="/first">/first</router-link></li>
                <ol>
                    <li>
                    <router-link :to="{path:'/users/honghuaixxx',query:{aaa:'bbb'}}">
                        honghuaifan
                    </router-link>
                    </li>
                                 <li><router-link append to="about">append</router-link></li>
                                 <li><router-link exact to="about">exact</router-link></li>

                    <router-link tag="li" :to="{path:'/users/honghuaixxx',query:{aaa:'bbb'}}">
                        honghuaifan
                    </router-link>
                </ol>           
            </ol>
            <router-view></router-view>
        </div>
        `
}).$mount("#app");