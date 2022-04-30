<template>
    <button><slot></slot></button>
</template>

<script>
    export default {
        name:'custom-button'
    }
</script>

<style scoped>
    button{
        width: 100px;
        height: 50px;
        font-size: 16px;
    }
</style>