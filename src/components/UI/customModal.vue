<template>
    <div @click="closeModal" class="dialog" v-if="isModalOpen===true">
        <div class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'custom-modal',
        props:{
            isModalOpen:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            closeModal(event){
                if (event.target.className=='dialog'){
                    this.$emit('update:isModalOpen',false)
                }
            }
        }
    }
</script>

<style scoped>
    .dialog{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(151, 74, 182, 0.256);
        display: flex;
    }
    .dialog__content{
        margin: auto;
        background: white;
        padding: 15px;
        border: 2px solid #000;
        box-shadow: 0 0 3px -1px;
        border-radius: 17px;
    }
</style>