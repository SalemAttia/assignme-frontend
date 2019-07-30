<template>
  <layout :showheader="false" v-if="dataReady">
    <board-nav></board-nav>
    <div class="all">
        <board-col v-for="(column,index) in columns" :key="'row'+index" :index="index" :data="column"></board-col>
        <Add-coulm :data="columns"></Add-coulm>
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout/index.vue';
import BoardNav from '../Component/Board-nav.vue';
import BoardCol from '../Component/Board-col.vue';
import AddCoulm from '../Component/AddCoulm.vue';
import { getBoard } from '../services/Board/index.js';


export default {
  name: 'Board',
  data () {
    return {
      msg: '',
      dataReady : false,
      columns: [],
    }
  },
  mounted:  function() {
      this.getAllUsers();
      this.dataReady = true;

  },
  methods: {
      getAllUsers() {
          getBoard().then(data => {
              this.columns = data.columns;
          });
    },
  },
  components: {
    Layout,
    BoardNav,
    BoardCol,
    AddCoulm
  }
}
</script>

<style >
  @import '../assets/css/index-style.css';
</style>
