<template>
    <div class="" style="border-radius:5px">
      <div class="labell">
        <div class="list-card-cover js-card-cover" style></div>
      </div>
      <div class="end">
        <h2>{{data.name}}</h2>
        <span>
          <i class="fas fa-prescription-bottle"></i>
          <i class="fas fa-paperclip"></i>
        </span>
      </div>
    </div>
</template>


<script>
export default {
  name: "imagecard",
  props:['data','index']

};
</script>

<style>
.labell
{
  padding: 0 14px 1px;
}
.end
{
  margin:0px 14px 12px;
}
.js-card-cover {
  background-color: rgb(244, 244, 244);
  background-image: url(../assets/image/welcome.png);
  height: 232px;
  background-size: contain;
}
</style>

