<template>
<div>
  <div class="firstdiv">
    <imagecard></imagecard>
    <labelitem></labelitem>
  </div>
</div>
</template>
<script>

import imagecard from '../Component/Image-card.vue';
import labelitem from '../Component/Label-item.vue';

export default {
  name:"boardcol",
  props:['data','index'],
components: {
  imagecard,
  labelitem,
  }
}
</script>
<style>

</style>

