/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 * 1.如何处理404等异常界面显示
 * 2.import vue组件，直接作为component存在
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = {
    template: `
        <div>
             this is Home content.......
        </div>
    `
}
const Page404 = {
    template: `
    <div>this is a 404 page.</div>
`
}
const Parent = {
    template: `
        <div>
        <p>this is parent.</p>
        </div>
    `
}

const test404 = {
    template: `
        <div>
        <p>在routes中，*可以用来表示无效路径访问的默认路径，如：404 error page,要放在routes数组的最后一项.</p>
        </div>
    `
}
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/parent',
            component: Parent
        },{
            path: '/test404',
            component: test404
        },{
            path: '*',
            component: Page404
        }
    ]
})
Vue.filter('capital',function(v){
    return v.toUpperCase() + "....."
})
new Vue({
    router,
    data(){
        return {
            aa: 'fade',
            conn: 'why not like u 1314.'
        }
    },
    template: `
        <div id="wrap">
        <div>
        <button @click="back"> <后退 </button>
        <button @click="forward"> 前进 </button>
        <button @click="home"> 返回首页 </button>
        <button @click="query"> query </button>
        </div>
            <ol>
                <li><router-link to="/">/home--{{conn | capital}}</router-link></li>
                <li><router-link to="/parent">/parent</router-link></li>
                <li><router-link to="/aads">error 404.</router-link></li>
                <li><router-link to="/test404">测试404</router-link></li>
            </ol>
            <transition :name="aa" mode="in-out">
                <router-view></router-view>
            </transition>

        </div>
    `,
    methods: {
        back(){
            router.go(-1);
        },
        forward(){
            router.go(1);
        },
        home() {
            console.log(router);
            router.push("/");
        },
        query() {
            console.log(router);
            router.push({
                path: '/',
                query: {
                    a: 11,
                    b: 22
                }
            });
        }
    }
}).$mount("#app");