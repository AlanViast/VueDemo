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
  <nav></nav>
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
      'nav': require('./components/nav.vue')
  }
};

</script>