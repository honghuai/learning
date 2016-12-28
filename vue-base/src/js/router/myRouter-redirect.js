/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 * 路由重定向redirect
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = {
    template: `
        <div>
            this is Home content.
        </div>
    `
};
const First = {
    template: `
        <div>
             First....
             <router-view></router-view>
        </div>
    `
};
const firstFirst = {
    template: `
        <div>
             firstFirst....
        </div>
    `
};
const firstFirstb = {
    template: `
        <div>
             firstFirstbbbb....
        </div>
    `
};
const First0 = {
    template: `
        <div>
             First00000....
        </div>
    `
};
const First1 = {
    template: `
        <div>
             First11111
        </div>
    `
}
const First2 = {
    template: `
        <div>
             First22222
        </div>
    `
}
const Second = {
    template: `
        <div>
             Second
        </div>
    `
}
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/first',
            component: First,
            children: [

             {
                    path: '1',
                    component: First1
                },{
                    path: '2',
                    component: First2
                }
            ]
        },
        {
            path: '/second',
            component: Second,
            redirect: 'first'
        } ,{
            path: '/aa/:id',
            name: 'home-first-first',
            component: firstFirst
        },{
            path: '/bb/:id',
            name: 'home-bb',
            redirect: '/aa/:id',
            component: firstFirstb
        },{
            path: '/cc/:id',
            name: 'home-cc',
            redirect: xxxx=> {//es6写法，翻译如下面注释部分
                const {hash,params,query} = xxxx;
                if(params.id === "001") {
                    return '/';
                }
            }
           /* redirect: function(arg) {
                if(arg.params.id === "001") {
                    return '/'
                }
            }*/
        }
    ]
})
new Vue({
    router,
    template: `
        <div>
            <ol>
                <li><router-link to="/">/</router-link></li>
                <li><router-link to="/first">/first</router-link></li>
                <ol>
                    <li><router-link :to="{name: 'home-first-first',params: {id:1122}}">home-first-first</router-link></li>
                    <li><router-link to="/first/1">/first/1</router-link></li>
                    <li><router-link to="/first/2">/first/2</router-link></li>
                </ol>
                <li><router-link to="/second">/second</router-link></li>
                <li><router-link to="/aa/123">/aa/123</router-link></li>
                <li><router-link to="/bb/456">/bb/456</router-link></li>
                <li><router-link to="/cc/001">/cc/001</router-link></li>
            </ol>
            <router-view></router-view>

        </div>
    `
}).$mount("#app");