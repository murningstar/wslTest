<template>
    <shit-navbar/>
    <div class='posts'>

        <h1>okay</h1>
        <custom-input v-model='searchQuery'/>
        <div class="buttons">
            <custom-button class='custom-button' @click="openForm">Новый пост</custom-button>
            <custom-select v-model='selectedSort' :options='sortOptions'/>
        </div>
        <custom-modal v-model:isModalOpen='isFormOpen'>
            <post-form @create='append'/>
        </custom-modal>
        <p class='loading' v-if="isLoading">
            Загрузка постов...
        </p>
        <post-list v-else :posts='searchedInSorted' @delete='removePost'/>
        <div class='obsParent'>
            <div 
                ref='observer' 
                class='observer' 
                :style="{'height':screenY+'px','width':screenX+'px'}">
            </div>
        </div>
    </div>
</template>

<script>
    import postForm from '@/components/postForm.vue';
    import postList from '@/components/postList.vue';
    import axios from 'axios'
    export default {
        components: { postForm, postList },
        data() {
            return {
                posts:[],
                isFormOpen:false,
                isLoading:false,
                selectedSort:'id',
                sortOptions:[
                    {text:'По названию',value:'title'},
                    {text:'По ID',value:'id'}
                ],
                searchQuery:'',
                totalPages:null,
                currentPage:1,
                counterForObserver:0,
                screenY:null,
                screenX:null,
            }
        },methods: {
            append(post){
                this.posts.unshift(post)
                this.isFormOpen=false
                this.searchQuery=''
            },
            removePost(post){
                this.posts = this.posts.filter(p=>p.id!==post.id)
            },
            openForm(){
                this.isFormOpen=true
            },
            async requestPosts(){
                this.isLoading = true
                let response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                    params:{
                        _limit:10,
                        _page:this.currentPage,
                        }
                })
                let posts = response.data
                this.totalPages = Math.ceil(response.headers['x-total-count'] / 10)
                this.posts = posts
                this.isLoading=false
            },
            async requestMorePosts(){
                this.currentPage+=1
                let response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                    params:{
                        _limit:10,
                        _page:this.currentPage,
                        }
                })
                let posts = response.data
                this.totalPages = Math.ceil(response.headers['x-total-count'] / 10)
                this.posts = this.posts.concat(posts)
                this.isLoading=false
            },
        },
        computed: {
            sortedPosts(){
                return [...this.posts].sort((postA,postB)=>
                    postA[this.selectedSort] > postB[this.selectedSort])
            },
            searchedInSorted(){
                return this.sortedPosts.filter(post=>post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
        mounted(){
            this.screenY = window.innerHeight/2
            this.screenX = document.documentElement.clientWidth - 18
            this.requestPosts().catch(err=>{
                this.isLoading=false
                console.log(err)
            });
            let options = {
                rootMargin: '0px',
                threshold: 0.5
            }
            let observer = new IntersectionObserver((entries,observer)=>{
                console.log(entries);
                if (entries[0].isIntersecting===true){
                        this.requestMorePosts()
                }
            }, options);
            observer.observe(this.$refs.observer);
        }
    }
</script>

<style scoped>
    .posts{
        padding: 12px;
        background-color: rgb(43, 23, 55);
    }
    .buttons{
        display: flex;
        /* justify-content: space-between; */
    }
    .custom-button:first-child{
        margin-right: 10px;
    }
    h1{
        color: white;
    }
    .loading{
        color: whitesmoke
    }
    .custom-pagination{
        justify-content: center;
    }
    .obsParent{
        position: absolute;
        left: 0px;
    }
    .observer{
        position: absolute  ;
        background-color: rgba(100, 100, 100, 0.0);
        bottom: 12px;
        z-index: -10;
    }
</style>