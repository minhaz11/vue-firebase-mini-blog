import Vue from 'vue'
import VueRouter from 'vue-router'
import addBlog from '@/components/addBlog.vue';
import showBlogs from '@/components/showBlogs.vue';
import singleBlog from '@/components/singleBlog.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'showBlogs',
    component: showBlogs
  },
  {
    path: '/add',
    name: 'addBlog',
    component: addBlog
  },
  {
    path: '/post/:id',
    name: 'singleBlog',
    component: singleBlog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
