<template>
<div>
  <div class="firstdiv">
     <div class="header">
      <span class="h1">{{data.name}}</span>
      <span class="dot">
        <i class="far fa-ellipsis-h"></i>
      </span>
    </div>
    <CardsList v-for="(card, index) in data.cards" :key="`${'card'}${index}`" :data="card"></CardsList>
    <Add-item :data="data.cards" :index="index"></Add-item>
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
  }
}
</script>
<style>

</style>

