<template>
  <section>
      <header></header>
      <slot></slot>
      <footer></footer>
  </section>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  name: 'login',
  data () {
    return {
      msg: ''
    }
  },
  components : {
      Header,
      Footer
  }
}
</script>

<style lang="scss">

</style>
