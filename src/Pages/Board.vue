<template>
  <layout :showheader="false">
    <h1>Board</h1>
  </layout>
</template>

<script>
import Layout from '../Layout/index.vue';
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
