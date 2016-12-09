<template>
    <p>
        {{greeting}}world!
    </p>
</template>

<script>
    moudle.exports = {
        data: function() {
            return {
                greeting: "Helllo"
            }
        }
    }
</script>

<style scoped>
p{
    font-size:2em;
    text-align: center;
}
</style>