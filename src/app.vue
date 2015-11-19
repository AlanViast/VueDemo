<template>
<div>
  <h1>{{msg}}</h1>
  <a v-link="{ path: '/users' }"> User Root</a>
  <a v-link="{ path: '/notfound' }"> 404 </a>
  <a v-link="{ path: '/users/login' }"> Login Page </a>
  <router-view></router-view>
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