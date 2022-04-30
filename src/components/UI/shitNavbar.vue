<template>
    <div class='navbar__container'>
        <div @click="$router.push('/')" class='navbar__elem logo button'>
            <p>baza</p>
        </div>
        <div class='navbar__elem right'>
            <button @click='$router.push("/posts")' class='links button'>posts</button>
            <button @click='$router.push("/about")' class='links button'>about</button>
        </div>
    </div>
</template>

<script>
import customButton from './customButton.vue'
    export default {
  components: { customButton },
        name:'shit-navbar'
    }
</script>

<style scoped>
    .navbar__container{
        display: flex;
        justify-content: space-between;
        background-color: rgb(60, 35, 62);
        padding: 10px;
        position: sticky;
        top: 0;
        border: 1px solid rgba(255, 255, 255, 0.578);
        box-shadow: 0 0 3px 0 rgba(226, 226, 226, 0.527);
    }
    .right{
        display: flex;
    }
    .links{
        display: block;
        margin-left: 5px;
    }
    .button{
        background-color: rgb(56, 63, 82);
        color: white;
        width: 120px;
        padding: 10px;
        text-align: center;
        font-size: 1rem;
        border: 3px solid wheat;
        border-radius: 5px;
    }
    .logo{
        background-color: rgb(89, 41, 48);
        width: 100px;
    }
</style>