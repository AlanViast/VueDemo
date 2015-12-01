<template>
  <div class="container">
    <h2 class="red">{{msg}}</h2>
    <p>{{name}}</p>
    <button type="button" v-on:click="login">Login</button>
  </div>
</template>

<script>
module.exports = {
  data: function(){
    return {
      msg: 'this is a login file',
      name: 'AlanViast'
    };
  },
  methods: {
    login: function(){
      console.log(this.$http.get);
      this.$http.get('/getUser', function(data){
        this.name= 'alanvaiast2';
      });
    }
  }
};
</script>
