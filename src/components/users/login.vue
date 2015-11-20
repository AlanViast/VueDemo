<template>
  <div class="container">
    <h2 class="red">{{msg}}</h2>
    <button type="button" v-on:click="login">Login</button>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      msg: 'this is a login file'
    };
  },
  methods: {
    login: function(){
      console.log(this.$http.get);
    }
  }
};
</script>
