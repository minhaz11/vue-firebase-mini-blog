import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.use(VueResource)

//vue custom directive
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = '#'+ Math.random().toString().slice(2,8);
  }
});
Vue.directive('theme', {
  bind(el, binding, vnode) {
   if(binding.value == 'wide'){
     el.style.maxWidth = '1000px'
   }
   if(binding=='narrow'){
    el.style.maxWidth = '400px'
   }
    if(binding.arg=='col'){
      el.style.background = '#ddd'
    }
  }
});
//filters
Vue.filter('snippet', value=>{
   return value.slice(0,100) +'....'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
