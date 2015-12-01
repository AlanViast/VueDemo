var $ = require('jquery');

window.$ = $;
window.jQuery = $;

require('bootstrap');

var Vue = require('vue')
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var App = require('./app.vue')

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

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

router.start(App, 'app');

window.router = router;