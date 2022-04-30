<template>
    
    <div class='flex-cont'>
        <div>
            <p>{{post.id}}</p>
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
        </div>
        <div style="align-self:center;display:flex;margin-left:15px">
            <custom-button @click='$router.push(`/posts/${post.id}`)'>Открыть</custom-button>
            <custom-button @click="$emit('delete',post)" style='margin-left:10px'>Удалить</custom-button>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            post:[Object]
        }
    }
</script>

<style scoped>
    .flex-cont{
        display: flex;
        justify-content: space-between;
        border: 1px solid #000;
        padding: 0px 15px;
        margin: 10px 0px;
        background-color: rgba(137, 67, 137, 0.526);
    }
    h3{
        color:white;
    }
    p{
        color:wheat
    }
</style>