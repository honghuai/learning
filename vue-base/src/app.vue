<template>
<div class="message">姓名：{{name}}  年龄：{{age}} 姓名：{{sex}} </div>
</template>

<script type="es6">
export default {
 data () {
 return {
  name:'张三234',
  age:'46',
  sex:'女'
 }
 }
}
</script>

<style>
.message {
 color: black;
 font-size:30px;
 font-weight: bold;

 border:1px solid orange;
}
</style>