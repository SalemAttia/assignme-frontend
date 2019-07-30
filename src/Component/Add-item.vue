<template>
  <div>
    <button class="list-card text-center" @click="addItem">
       Add new 
    </button>
  </div>
</template>

 <script>
 export default {
   name:"add-item",
   props: ['data','index'],
   methods: {
       addItem() {
      
       }
   }
 }
 </script>
