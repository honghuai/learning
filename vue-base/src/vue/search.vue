<template>
    <div class="wrap list-group">
        <a href="#" class="list-group-item active">
            CRM项目基础UI界面
        </a>
        <a href="javascript:;"class="list-group-item" v-for="item in items">{{item}}</a>
    </div>
</template>
<script type="es6">
export default{
    data() {
    return {
        items: ["登录界面","编辑界面","新建界面","测试界面"]
    }
}
}
</script>
<style>
    @import "./../js/bootstrap/bootstrap.min.css";

    .wrap{
        width: 400px;
        margin:0 auto;
    }
</style>