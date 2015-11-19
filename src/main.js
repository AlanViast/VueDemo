var Vue = require('vue')
var VueRouter = require('vue-router');
var App = require('./app.vue')

/*
var app = new Vue({
  el: 'body',
  components: {
    app: App
  }
})
*/

Vue.use(VueRouter)
var router = new VueRouter()

router.map({

  '/': {
    component: require('./components/index.vue')
  },
  '*': {
    component: require('./components/404.vue')
  },

});

router.map({

  '/users': {
    component: require('./components/users/index.vue')
  },

  '/users/login': {
    component: require('./components/users/login.vue')
  },

});

router.start(App, 'body');

window.router = router;