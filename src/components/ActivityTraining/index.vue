<template>
 <div class="g-container">
    <div class="m-banner">
      <div class="banner-text">
          <h2 class="title">服务顾问</h2>
          <span class="english-title">
            Service Consultant
          </span>
      </div>
    </div>
    <div class="wrapper">
    <ServiceContainer />
    </div>
  </div>
</template>

<script>
import ServiceContainer from './container/index'
export default {
  name: 'ActivityTraining',
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  components:{
    ServiceContainer
  }
}
</script>

<style scoped>

.m-banner{
  width: 100%;
  height: 420px;
  background: url("../../assets/image/banner1.png") 0 0 no-repeat;
  background-size: 100% 420px;
  
}
.banner-text{
  margin: 0 auto;
  padding-top: 90px;
  width: 1200px;
  position: relative;
}
.banner-text::before{
  content: '';
  display: block;
  width: 56px;
  height: 6px;
  background: #FFFFFF;
  position: absolute;
  top: 219px;
  left: 0;
}
.banner-text .title{
    width: 208px;
    height: 73px;
    font-size: 52px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 73px;

}
.banner-text .english-title{
    width: 233px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 22px;
    opacity: .9;
}
</style>
