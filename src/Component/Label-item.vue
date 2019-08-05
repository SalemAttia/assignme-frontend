<template>
  <div>
    <modal v-show="isModalVisible" @close="closeModal" :data="data"/>
    <a class="list-card js-member-droppable ui-droppable" href="#">
      <div class="list-card-details js-card-details">
        <div class="list-card-labels js-card-labels">
          <span class="card-label card-label-green mod-card-front"></span>
        </div>
        <span class="list-card-title js-card-name" @click="showModal" dir="auto" :data="data">{{data.name}}</span>
      </div>
    </a>
  </div>
</template>

 <script>
 import modal from '../Component/modal.vue';
export default {
  name: "labelitem",
  props: ["data", "index"],
  data () {
    return {
      isModalVisible: false,
    }
  },
  methods :
  {
    showModal() {
        this.isModalVisible = true;
        console.log(data);
      },
      closeModal() {
        this.isModalVisible = false;
      },
  },
  components :{
    modal,
  }
}
</script>
