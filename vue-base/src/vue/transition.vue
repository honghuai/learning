<template>
    <div>
        <button @click="show = !show">show/hide按钮</button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script type="es6">
    export default{
        name: 'demo',
        data() {
            return {
                show: true
            }
        }
    }
</script>

<style>
    .fade-enter-active,.fade-leave-active{
        transition: opacity .5s;
    }
    .fade-enter,.fade-leave-active{
        opacity: 0;
    }

    .fade2-enter-active,.fade2-leave-active{
        transition: background .5s ease-in,color 0.3s ease-out;
    }
    .fade2-enter,.fade2-leave-active{
        background-color: #f6f6f6;
        color: red;
    }
</style>