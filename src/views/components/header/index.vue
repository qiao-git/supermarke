<template>
  <div class="g-top">
    <div class="m-header">
            <div class="grid-content bg-purple clearfix wrapper">
                <ul class="m-login fl">
                    <li class="fl wecome">您好！</li>
                    <li class="fl login"><router-link to="#">登陆</router-link></li>
                    <li class="fl register"><router-link to="#">注册</router-link></li>
                </ul>
                <ul class="m-evaluate fr">
                    <li class="fl evaluate"><router-link to="#">写评价</router-link></li>
                    <li class="fl demand"><router-link to="#">提需求</router-link></li>
                    <li class="fl mechanism"><router-link to="#">添加机构</router-link></li>
                </ul>
            </div>
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from '../nav/index'
export default {
  name: 'Header',
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  components:{
      Nav
  }
}
</script>

<style scoped>
.g-top{
    font-family: MicrosoftYaHei;
      color: #5B5B5B;
      font-size: 14px;
      width: 100%;
      background: #fff;
}
.m-header{
    padding: 8.5px 0;
    background: #F4F6F9;
}
.m-login li a,.m-evaluate li a {
      font-family: MicrosoftYaHei;
      color: #5B5B5B;
      font-size: 14px;
}
.wecome{
    padding-right: 32px;
}
.login{
    padding-right: 12.5px;
    border-right: 1px solid;
     border-color: rgba(97, 97, 97, .3);
}
.register{
    padding-left: 12.5px;
}
.evaluate{
    padding-right: 12px;
    border-right: 1px solid;
     border-color: rgba(97, 97, 97, .3);
}
.demand{
   padding: 0 12px;
   border-right: 1px solid;
   border-color: rgba(97, 97, 97, .3);
}
.mechanism{
    padding-left: 12px;
}
.m-nav{
    height: 156px;
}


</style>
