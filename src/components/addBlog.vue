<template>
  <div id="add-blog" class="container" style="margin-top:70px">

<div class="row">
<div class="col-md-6" style="border:1px solid lightgrey" v-if="!submitted">
 <div v-if="submitted" class="alert alert-success" role="alert">
  Successfully created a post
</div>
    <h3 class="card-header">New Post</h3><br>
    <form >
      <div class="form-group">
        <label for="exampleFormControlInput1"> <strong> Title:</strong></label>
        <input
          type="text"
          v-model.lazy="blog.title"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1"> <strong> Content:</strong></label>
        <textarea
          class="form-control"
          v-model.lazy="blog.content"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    <div class="form-check form-check-inline">  
      <div class="form-check">
        <input type="checkbox" class="form-check-input" value="vue" id="exampleCheck1" v-model="blog.category">
        <label class="form-check-label" for="exampleCheck1">Vue Js</label>
      </div>
       <div class="form-check">
        <input type="checkbox" class="form-check-input" value="react" id="exampleCheck1" v-model="blog.category">
        <label class="form-check-label" for="exampleCheck1">React Js</label>
       </div>
        <div class="form-check">
        <input type="checkbox" class="form-check-input" value="angular" id="exampleCheck1" v-model="blog.category">
        <label class="form-check-label" for="exampleCheck1">Angular Js</label>
        </div>
         <div class="form-check">
        <input type="checkbox" class="form-check-input" value="express" id="exampleCheck1" v-model="blog.category">
        <label class="form-check-label" for="exampleCheck1">Express Js</label>
         </div>
    </div>  <br> <br>
<div class="input-group mb-3">
  <select class="custom-select" id="inputGroupSelect02" v-model="blog.author">
    <!-- <option selected>Choose...</option> -->
    <option v-for="(author,i) in authors" :key="i">{{author}}</option>
  </select>
  <div class="input-group-append">
    <label class="input-group-text" for="inputGroupSelect02">Authors</label>
  </div>
</div> 
<div class="form-group"><button @click.prevent="add()" class="btn btn-primary">Create</button></div>
   
    </form>
    
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-5" style="border:1px solid lightgrey">
        <div class="blog-review">
      <h3 >Preview Blog</h3><hr>
      <div class="">
        <h5 class="card-header"> Title: {{blog.title}}</h5>
        <div class="card-body">
          <h5 class="card-title">Content:</h5>
          <p class="card-text">{{blog.content}}</p><hr>
          <h5 class="card-title">Categories:</h5>
          <ul class="list-group">
              <li class="list-group-item" v-for="(cat,i) in blog.category" :key="i">{{cat}}</li>
          </ul><hr>
          <h5 class="card-title">Author: <small>'{{blog.author}}'</small></h5>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                title:'',
                content:'',
                category:[],
                author:''
            },
            authors:['Minhaz','Afzal','Jonny','Orchid'],
            submitted:false
        }
    },
    methods: {
        add() {
           this.$http.post('https://vue-blog-4a3a3.firebaseio.com/posts.json',this.blog).then(data=>{
               this.submitted = true
               console.log(data)
           })
        }
    },
};
</script>

<style></style>
