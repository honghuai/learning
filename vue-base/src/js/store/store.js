import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import './state.js'
/*const state = {//state叫做‘访问状态对象’，通过事件去触发改变状态
    count: 12
}*/
const mutationsxx = {//mutations叫做‘触发状态’，需要用commit来触发mutations状态【同步】
    increase(state,v) {
        console.log(v);
        state.count += v.n | 1;
    },
    descrease(state) {
        state.count --;
    }

}
/*getter相关start
*
* 在vue2.js 中官方不建议在computed中使用箭头函数，因为箭头函数的this指的是上一层，而不是本层，
* 疑惑？this会出现一个穿透性事件，它会往上传，不会往下传。
* */
const getters = {//getters叫做‘计算属性’
    count: function(state) {
        return state.count += 100
    }
}
/*getter相关end*/

/**
 * action 异步批处理状态的集合
 * */
const actions = {
    increaseplus(context) {
        context.commit('increase',{
            a: 1
        });
        setTimeout(()=>{
            context.commit('descrease');
            // context.commit('increase',{});
        },3000)
        console.log('此處會在setTimeout前執行')
    },
    descreaseplus({commit}){
        commit('descrease')
    }

}
/*action 相关end*/
/**
 * 模块组写法前：
 * export default new Vuex.Store({
    state,
    mutations:mutationsxx,
    getters,
    actions
})
 *
 *
 * module模块组写法如下
 * */
const moduleA = {
    state,
    mutations:mutationsxx,//该出写成es6语法，需要将上面的mutationsxx改为mutations，然后该行直接写mutations，翻译过来就是mutations:mutations
    getters,
    actions
}

const moduleB = {
    state: {countB: 2},
    mutations:mutationsxx,
    getters,
    actions
}
export default new Vuex.Store({
   modules: {
       a:moduleA,
       b:moduleB
   }
})