<template>
    <div>
        <h1>hello vuex.-state访问状态对象的两种写法</h1>
        <p>比较长的写法：{{$store.state.count}}</p>
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
mapActions计算方法

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
            ...mapState(["count"]),
           // ...mapGetters([
             //   'count'
            //])
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