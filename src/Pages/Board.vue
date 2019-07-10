<template>
  <layout :showheader="true">
      <section>
        <h1>Board</h1>
      </section>
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

<style >
  section{
    margin-top: 70px;
  }
</style>
