<template>
    <div>
        <h1>hello vuex.-state访问状态对象的两种写法</h1>
        <p>比较长的写法：{{$store.state.count}}</p>
        <p>写mapStatejs后的简写：{{count}}</p>
        <div>
            <button @click='increase({n:5})'>+</button>
            <button @click='$store.commit("descrease")'>-</button>
        </div>
    </div>
</template>

<script>
/**
mutations触发状态（2种方法）：
1.$store.commit(方法名)
2.需要mapMutations组件，如本案例中直接写methods的increase方法
*/

    import { mapState,mapMutations } from 'vuex'
    export default {
        name: 'app',
        data() {
            return {
                count: 0
            }
        },
        computed:mapState(["count"]),
        methods: mapMutations([
            'increase'
        ])
    }
</script>