<template>
    <div v-if="posts.length>0">
        <!-- <transition-group name='posts'> -->
            <post-item 
                v-for="post in posts" 
                :post='post' 
                :key='post.id' 
                @delete="$emit('delete',post)"
            />
        <!-- </transition-group> -->
    </div>
    <div v-else>
        <h2>Постов либо нет, либо они не загрузились</h2>
        <p>Если проблема во втором, то мы ее решаем прямо сейчас, просим прощения за предоставленные неудобства</p>
    </div>
</template>

<script>
import postItem from './postItem.vue'
    export default {
        components:{
            postItem
        },
        props:{
            posts:[Array],
        }
    }
</script>

<style scoped>
    h2{
        color: whitesmoke;
    }
    .posts-item {
        display: inline-block;
        margin-right: 10px;
    }
    .posts-enter-active,
    .posts-leave-active {
        transition: all 1s ease;
    }
    .posts-enter-from,
    .posts-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    .posts-move{
        transition: transform 0.8s ease;
    }
    p{
        color: antiquewhite;
    }
</style>