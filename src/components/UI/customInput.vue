<template>
    <input @input='emitFunc' :value='modelValue' type="text">
</template>

<script>
    export default {
        name:'custom-input',
        props:{
            modelValue:[String]
        },
        methods: {
            emitFunc(event){
                this.$emit('update:modelValue',event.target.value)
            }
        },
    }
</script>

<style scoped>
    input{
        padding: 10px;
        margin-bottom: 10px;
    }
</style>