/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 * 路由的过渡动画监听watch xx-enter xx-enter-active  xx-leave xx-leave-active
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import transition from '../../vue/transition.vue'

Vue.use(VueRouter);

const Home = {
    template: `
        <div>
             this is Home
        </div>
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
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/parent',
            component: Parent
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