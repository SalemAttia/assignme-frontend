<template>
  <section>
      <layout-header v-if="showheader"></layout-header>
      <slot></slot>
      <footer></footer>
  </section>
</template>

<script>
import LayoutHeader from './Header.vue'
import Footer from './Footer.vue'
export default {
  props:['showheader'],
  name: 'login',
  data () {
    return {
      msg: ''
    }
  },
  components : {
      LayoutHeader,
      Footer
  }
}
</script>

<style lang="scss">

</style>
