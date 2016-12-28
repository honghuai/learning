<template>
    <div>
        <h1>hello vuex.-state访问状态对象的两种写法</h1>
        <p>比较长的写法：{{$store.state.a.count}} and {{$store.state.b.countB}}</p>
        <p>写mapStatejs后的简写：{{count}}</p>
        <div>
            <button @click='increase({n:5})'>+</button>
            <button @click='$store.commit("descrease")'>-</button>
        </div>

        <div>
            <button @click='increaseplus'>+plus</button>
            <button @click='descreaseplus'>-plus</button>
        </div>
    </div>
</template>

<script>
/**
store.js里采用modules模块组写法后
原先的{{$store.state.count}}需要这么写去获取count值 {{$store.state.a.count}}

写法：
methods: {
            ...mapMutations([
            'increase'
            ]),
            ...mapActions([
                'increaseplus',
                'descreaseplus'
            ])
        }
*/

    import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
    export default {
        name: 'app',
        data() {
            return {
                count: 0
            }
        },
        computed:{
            count(){
                return this.$store.state.a.count
            }
        },
        methods: {
            ...mapMutations([
            'increase'
            ]),
            ...mapActions([
                'increaseplus',
                //'descreaseplus'
            ]),
            ...mapActions({
                'descreaseplus': 'descreaseplus'
                })
        }
    }
</script>