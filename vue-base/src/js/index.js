import Vue from "vue";
import App from "../vue/app.vue";
import Search from "../vue/search.vue";
/*通过app.vue取一个部件叫App，并且将模板镶嵌在app元素中。*/
new Vue({
    el: "#app",
    data: {
        lists: ["年龄2","性别2","爱好2"]
    },
    components: {
        App,Search
    }
})