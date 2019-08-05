import Vue from 'vue'
import App from './App.vue'
import router from './routes.js';


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
