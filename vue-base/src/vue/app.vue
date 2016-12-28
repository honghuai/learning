<template>
    <div class="msg">
        {{msg}}
        <button @click.prevent="increment">触发{{count}}</button>
        <ol>
            <li v-for="list in lists">{{list}}</li>
        </ol>
    </div>
</template>

<script type="es6">
    export default {
        data() {
            return {
                count: 0,
                msg: "Hi vue and webpack1",
                lists: ["年龄","性别","爱好","专业技能","心理学","哲学x8"]
            }
        },
        methods: {
            increment() {
                this.count ++;
            }
        }
    }
</script>

<style>
    .msg{
        color: #999;
    }
</style>