<template>
    <div  id="show-blogs">
        <h1 class="text-center h3">All Blogs</h1>
        <input class="form-control mr-sm-2" type="text" v-model="search" placeholder="search blogs..." >
        <div v-for="(blog, i) in filterBlog" :key="i" class="single-post">
            <router-link :to="'/post/'+blog.id" v-rainbow>{{blog.title}}</router-link>
            <p>{{blog.content | snippet}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
            search:'',
        }
    },
    created()
    {
           this.$http.get('https://vue-blog-4a3a3.firebaseio.com/posts.json').then((res)=>{
            return res.json()
           }).then(data=>{
               var arr =[]
               for(let key in data){
                   data[key].id = key
                   arr.push(data[key])
               }
               this.blogs = arr
              })
    },
   
    computed: {
        filterBlog() {
           return this.blogs.filter(blog=>{
                return blog.title.match(this.search);
            }) 
        }
    },
    
}
</script>

<style scoped>
    #show-blogs{
        max-width: 800px;
        margin: 0 auto;
        
    }
    .single-post{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
    .h3{
        padding: 20px;
        font-family: 'Nunito', sans-serif;
    }
    a{
        font-size: 24px;
        font-weight: 500;
    }
</style>