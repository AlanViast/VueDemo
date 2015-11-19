<template>
<div>
  <h1>{{msg}}</h1>
  <comp-a></comp-a>
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