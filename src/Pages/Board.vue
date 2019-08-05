<template>
  <layout :showheader="true" v-if="dataReady">
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
import modal from '../Component/modal.vue';




export default {
  name: 'Board',
  props : ["data", "index"],
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
    AddCoulm,
    modal
  }
}

</script>

<style >
  @import '../assets/css/index-style.css';
</style>
