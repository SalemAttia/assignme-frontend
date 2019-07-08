<template>
  <layout :showheader="true">
    <h2>Board</h2>
  </layout>
</template>

<script>
import Layout from '../Layout/index.vue'
export default {
  name: 'Board',
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
