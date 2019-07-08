<template>
  <layout :showheader="true">
    <h2>Home</h2>
  </layout>
</template>

<script>
import Layout from '../Layout/index.vue'
export default {
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Layout,
  }
}
</script>

<style lang="scss">

</style>
