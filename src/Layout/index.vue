<template>
  <section>
      <layout-header v-if="showheader"></layout-header>
      <slot></slot>
      <layout-footer v-if="footerheader"></layout-footer>
  </section>
</template>

<script>
import LayoutHeader from './Header.vue'
import LayoutFooter from './Footer.vue'
export default {
  props:['showheader','footerheader'],
  name: 'login',
  data () {
    return {
      msg: ''
    }
  },
  components : {
      LayoutHeader,
      LayoutFooter,
  }
}
</script>

<style lang="scss">

</style>
