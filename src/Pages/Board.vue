<template>
  <layout :showheader="false">
    <board-nav></board-nav>
    <div class="all">
        <board-col></board-col>
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout/index.vue';
import BoardNav from '../Component/Board-nav.vue';
import BoardCol from '../Component/Board-col.vue';

export default {
  name: 'Board',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Layout,
    BoardNav,
    BoardCol,
  }
}
</script>

<style >
  @import '../assets/css/index-style.css';
</style>
