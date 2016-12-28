/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 * 1.如何处理404等异常界面显示
 * 2.import vue组件，直接作为component存在
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import BtnTransition from '../../vue/transition.vue'

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
const router = new VueRouter({
    mode: 'hash',//history
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/parent',
            component: BtnTransition
        },{
            path: '*',
            component: Page404
        }
    ]
})
new Vue({
    router,
    data(){
      return {
          aa: 'fade'
      }
    },
    template: `
        <div>
        <p>about transition watch....</p>
            <ol>
                <li><router-link to="/">/home</router-link></li>
                <li><router-link to="/parent">/parent</router-link></li>
                <li><router-link to="/aads">error 404.</router-link></li>
            </ol>
            <transition :name="aa" mode="in-out">
                <router-view></router-view>
            </transition>

        </div>
    `,
    watch: {
        '$route'(to,from) {
            console.log(to);
            console.log(from);
            if(from.path == '/parent') {
                this.aa = 'fade';
            } else {
                this.aa = 'fade2';
            }
        }
    }
}).$mount("#app");