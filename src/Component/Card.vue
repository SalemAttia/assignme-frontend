<template>

      <li :key="'row'+index" class="col-12 col-md-6 col-lg-3">
          <div class="cnt-block equal-hight">
            <h3><a :href="`${url}${data.id}`">{{data.name}} </a></h3>
          </div>
      </li>

</template>

<script>
import Layout from '../Layout/index.vue'
import { getUsers } from '../services/user/index.js'
export default {
  name: 'Card',
  props: ['data','index'],
  data () {
    return {
        url:'/board/'
    }
  },

}
</script>

<style lang="scss">

</style>
