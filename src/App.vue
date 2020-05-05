<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark " >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav " style=" margin:0 auto">
        <li class="nav-item ">
          <router-link class="nav-link"  to="/" exact><strong>Blogs</strong><span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"  to="/add" exact><strong>Add</strong></router-link>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li> -->
      </ul>
    </div>
</nav>
<router-view></router-view>
  </div>
</template>

<script>
import addBlog from '@/components/addBlog.vue';
import showBlogs from '@/components/showBlogs.vue';
  export default {
    components:{
      addBlog,
      showBlogs,
      
    }
  }
</script>

<style  scoped>
  .router-link-active{
    background:rgb(103, 122, 141);
    border-radius: 5px;
  }
</style>