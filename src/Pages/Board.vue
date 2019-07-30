<template>
  <layout :showheader="false" v-if="dataReady">
    <board-nav></board-nav>
    <div class="all">
        <board-col v-for="(card,index) in cards" :key="'row'+index" :index="index" :data="card"></board-col>
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout/index.vue';
import BoardNav from '../Component/Board-nav.vue';
import BoardCol from '../Component/Board-col.vue';
import { getBoard } from '../services/Board/index.js';


export default {
  name: 'Board',
  data () {
    return {
      msg: '',
      dataReady : false,
      cards: [],
    }
  },
  mounted:  function() {
      this.getAllUsers();
      this.dataReady = true;

  },
  methods: {
      getAllUsers() {
          getBoard().then(data => {
              this.cards = data.cards;
          });
    },
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
