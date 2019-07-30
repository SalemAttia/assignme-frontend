<template>
<div>
    
    <imagecard v-if="data.type === 'img'" :data="data" :index="index"></imagecard>
    <labelitem v-if="data.type === 'label'" :data="data" :index="index"></labelitem>
</div>
</template>
<script>

import imagecard from '../Component/Image-card.vue';
import labelitem from '../Component/Label-item.vue';

export default {
  name:"cardsList",
  props:['data','index'],
components: {
  imagecard,
  labelitem,
  }
}
</script>
<style>

</style>

