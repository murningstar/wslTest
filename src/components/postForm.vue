<template>
    <form @submit.prevent class='postForm'>
            <custom-input v-model='inputTitle' type="text"/>
            <custom-input v-model='inputBody' type="text"/>
            <custom-button style='margin: 0 auto' @click="appendPosts">Post</custom-button>
    </form>
</template>

<script>
    export default {
        props:{
            postz:[Array]
        },
        data() {
            return {
                inputTitle:'',
                inputBody:'',
            }
        },methods:{
            appendPosts(){
                this.$emit('create',{
                    id:Date.now(),
                    title:this.inputTitle,
                    body:this.inputBody,
                });
                this.inputTitle=''
                this.inputBody=''
            }
        }

    }
</script>

<style scoped>
    .postForm{
        display: flex;
        flex-direction: column;
    }

</style>