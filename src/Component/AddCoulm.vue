<template>
<button class="firstdiv" @click="addColumn">
    <div class="header">
      <span class="h1">Add</span>
      <span class="dot">
        <i class="far fa-ellipsis-h"></i>
      </span>
    </div>
</button>
</template>
<script>

export default {
  name:"Add-colum",
  props:['data'],
methods: {
    addColumn() {
        this.data.push(
            {
              id:3,
              name: 'New',
              cards:[
              ],
            }
        );
    }
  }
}
</script>
<style>

</style>

