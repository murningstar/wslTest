<template>
    <div>
        <select  
            :value="modelValue" 
            @change='updatemethod' 
            name="" 
            id="">
            <option disabled value="">Сортировка по</option>
            <option 
                v-for="option in options" 
                :value="option.value" 
                :key='option.value'>{{option.text}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name:'custom-select',
        props:{
            options:Array,
            modelValue:String,
        },
        methods:{
            updatemethod(event){
                this.$emit('update:modelValue',event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>