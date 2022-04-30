<template>
    <div class="pagination__container">
        <div class='pagination__item' 
            v-for="page in totalPages"
            :class="{'currentPage':currentPage==page}"
            @click='$emit("pageChange",page)' 
            >
            {{page}}
        </div>
    </div>
</template>

<script>
export default {
    name:'custom-pagination',
    props:{
        totalPages:Number,
        currentPage:String,
    }
}
</script>

<style>
    .pagination__container{
        display: flex;
    }
    .pagination__item{
        display: block;
        border: 1px solid white;
        flex-basis: 16px;
        color:white;
        text-align: center;
        background-color: rgb(211, 104, 17);
    }
    .currentPage{
        background-color: rgb(60, 192, 185);
        box-shadow: 0 0 5px -2px whitesmoke;
    }
</style>