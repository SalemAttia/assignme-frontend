import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode:"history",
  routes
});

new Vue({
  el: '#app',
  router,
  methods: {
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    }
  },
  render: h => h(App)
})
