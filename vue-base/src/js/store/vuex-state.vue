<template>
    <div>
        <h1>hello vuex.-state访问状态对象的两种写法</h1>
        <p>比较长的写法：{{$store.state.count}}</p>
        <p>写mapStatejs后的简写：{{count}}</p>
        <div>
            <button @click='$store.commit("increase",{n: 5})'>+</button>
            <button @click='$store.commit("descrease")'>-</button>
        </div>
    </div>
</template>

<script>
/**
引入vuex的一个组件mapState，方便简写store里的参数
原来写法：
computed:{
    count() {
        return this.$store.state.count + 1
    }
}
简写(需要2个步骤)：
1.引用组件
import {mapState} from 'vuex'
2.改写computed
computed: mapState({
    count: state=>state.count + 1
})
如果不需要进行计算，可以这么写
computed:mapState(['count'])
*/

    import { mapState } from 'vuex'
    export default {
        name: 'app',
        data() {
            return {
                count: 0
            }
        },
        computed:mapState(["count"])
    }
</script>