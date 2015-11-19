<style>
.view {
  transition: all .5s ease;
}
.test-enter, .test-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}
.v-link-active {
  color: red;
}
[v-cloak] {
  display: none;
}
</style>

<template>
<div>
  <h1>{{msg}}</h1>
  <a v-link="{ path: '/users' }"> User Root</a>
  <a v-link="{ path: '/notfound' }"> 404 </a>
  <a v-link="{ path: '/users/login' }"> Login Page </a>
  <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
</div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      msg: 'Hello from vue-loader!'
    };
  },
  components: {
      'comp-a': require('./components/a.vue')
  }
};

</script>