<template>
  <div class="blog">
       <div class="card">
        <h5 v-for="(cat,i) in blog.category" :key="i" class="card-header">{{blog.title}} <small><span class="card-title" style="margin-left:400px"> <strong>Category:</strong> {{cat+','}}</span></small> </h5>
        <div class="card-body">
        <h5 class="card-title mb-3">Author: <small>'{{blog.author}}'</small></h5>
          <p class="card-text">{{blog.content}}</p>
          <!-- <h5 class="card-title">Categories:</h5> -->
          <!-- <ul class="list-group">
              <li class="list-group-item">{{blog.category}}</li>
          </ul><hr> -->
          
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://vue-blog-4a3a3.firebaseio.com/posts/'+this.id+'.json').then(res=>{
            return res.json();
        }).then(res=>{
            console.log(res)
            this.blog = res
        })
    }
}
</script>

<style scoped>
    .blog{
         max-width: 900px;
         margin: 0 auto;
    }
</style>