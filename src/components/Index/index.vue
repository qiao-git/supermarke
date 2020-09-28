<template>
  <div class="wrapper">
    <div class="g-service">
      <Left-Nav />
    </div>
    <Floor-Area />
  </div>
</template>

<script>
import LeftNav from './LeftNav/index'
import FloorArea from './container/index'
export default {
  name: 'Container',
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  components:{
    LeftNav,
    FloorArea
  }
}
</script>

<style scoped>
.g-service{
  height: 636px;
}
</style>
