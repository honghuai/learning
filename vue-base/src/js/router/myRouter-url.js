/**
 *myRouter.js
 *@author honghuai
 * @created 2016-12-21 13:50.
 * url传值 ,routes的正则，匹配上的作为$route.params参数存在
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/'
        },
        {
            path: '/params/:aaa/:bbb'
        },
        {
            path: '/parame-regex/:id(\\d+)'
        }
    ]
})

new Vue({
    router,
    template: `
        <div>
            <h1>please go out.</h1>
            <ul>
                <li><router-link to="/">/</router-link></li>
                <li><router-link to="/params/111/222">/p/1/2xxx2</router-link></li>
                <li><router-link to="/parame-regex/123">/p/parame-regex/123</router-link></li>
                <li><router-link to="/parame-regex/123xx">/p/parame-regex/xxx</router-link></li>
            </ul>
            <p>show</p>
            <pre><code>{{$route}}</code></pre>
            <pre><code>{{$route.params.aaa}}</code></pre>
             <pre><code>{{JSON.stringify($route,null,2)}}</code></pre>
        </div>
    `
}).$mount("#app");