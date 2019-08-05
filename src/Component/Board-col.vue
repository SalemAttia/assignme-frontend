<template>
<div>
  <div class="firstdiv">
     <div class="header">
      <span class="h1"><input v-model="data.name" /></span>
      <span class="dot">
        <i class="far fa-ellipsis-h"></i>
      </span>
    </div>
    <CardsList v-for="(card, index) in data.cards" :key="`${'card'}${index}`" :data="card"></CardsList>
    <Add-item :data="data.cards" :index="index" @newitem = "addNewitem"></Add-item>
  </div>
</div>
</template>
<script>

import CardsList from '../Component/CardsList.vue';
import AddItem from '../Component/Add-item.vue';


export default {
  name:"boardcol",
  props:['data','index'],
components: {
  CardsList,
  AddItem
  },
  methods:
  {
    addNewitem :function(data)
    {
      this.data.cards.push(
        {
          id:5,
          name:'text ',
          type:'label',
          content:'random test',
          img:'',
         order:5,
        }
      );
    }
  }
}
</script>
<style>

</style>

