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
getters计算方式(2种写法)
1.this.$store.getters.count
写法：
 computed:{
            ...mapState(["count"]),
            count(){
                return this.$store.getters.count
            }
        },

2.需要mapGetters组件
写法：
computed:{
            ...mapState(["count"]),
            ...mapGetters([
                'count'
            ])
        },
*/

    import { mapState,mapMutations,mapGetters } from 'vuex'
    export default {
        name: 'app',
        data() {
            return {
                count: 0
            }
        },
        computed:{
            ...mapState(["count"]),
            ...mapGetters([
                'count'
            ])
        },
        methods: mapMutations([
            'increase'
        ])
    }
</script>