<template>
  <div class="u-leftnav-box">
      <div class="m-leftnav">
        <div class="m-leftnav-title">
            <h3>服务分类</h3>
        </div>
        <left-nav-list />
      </div>
      <Left-Swiper/>
      <Data-Statistics />
  </div>
</template>

<script>

import LeftNavList from './LeftNavList'
import LeftSwiper from './LeftSwiper'
import DataStatistics from './DataStatistics'
export default {
  name: 'LeftNav',
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    
  },
  methods: {
   
  },
  components:{
    LeftNavList,
    LeftSwiper,
    DataStatistics
  }
}
</script>

<style scoped>
.u-leftnav-box{
  position: relative;
}
.m-leftnav{
  width: 240px;
  height: 636px;
}
.m-leftnav-title{
  width: 240px;
  height: 30px;
  background: #219AFB;

}
.m-leftnav-title h3{
  width: 57px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #FFFFFF;
  line-height: 25px;
  margin: 0 auto;
}
</style>
