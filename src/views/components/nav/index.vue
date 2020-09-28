<template>
  <div class="m-nav wrapper">
        <div class="grid-content gridcontent bg-purple clearfix">
            <div class="nav-icon-box fl">
                <div class="icon fl" >
                    <img src="../../../assets/image/ico.png" alt="icon">
                </div>
                <div class="icon-title fl">
                    <p class="title">江宁高新区智助服务交易平台</p>
                    <p class="s-title">互联网+社会化专业服务 政府公益性平台</p>
                </div>
            </div>
            <div :class="classObject">
                <ul class="search-table">
                  <li class="active fl">全部</li>
                  <li class="fl">机构</li>
                  <li class="fl">顾问</li>
                  <li class="fl">服务</li>
                </ul>
                <div class="search">
                    <input type="search" placeholder="输入您想查找的内容" id="search-input">
                    <input type="submit" value="搜索" id="search-button">
                </div>
            </div>
            <div class="shopcar fl" v-show="isShow">
                <img src="ico" alt="1">
                <router-link to="#">购物车</router-link>
            </div>
            <div class="login fl">
              <el-button type="primary" id="login-btn" v-show="isShow">登陆/注册</el-button>
            </div>
        </div>
        <div class="nav .navtim">
          <ul class="clearfix">
            <li class="fl first-li">
              <router-link to="/index" class="active">
                首页
              </router-link>
            </li>
             <li class="fl">
              <router-link to="/mechanism">
                服务机构
              </router-link>
            </li>
             <li class="fl">
              <router-link to="/adviser">
                服务顾问
              </router-link>
            </li>
             <li class="fl">
              <router-link to="/activity">
                活动培训
              </router-link>
            </li>
            <li class="fl">
              <router-link to="#">
                平台资讯
              </router-link>
            </li>
             <li class="fl">
              <router-link to="#">
                服务大数据
              </router-link>
            </li>
             <li class="fl">
              <router-link to="#">
                应用工具
              </router-link>
            </li>
             <li class="fl">
              <router-link to="#">
                关于我们
              </router-link>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {},
  data() {
    return {
      isShow:true,
      classObject:[{
        'searchbox':true,'searchShow':true,'fl':true,'gridcontent':true,'navtim':true

    }]
  }
  },
  watch: {
     $route(now){
       if(now.path === "/index"){
         this.isShow = true;
         this.classObject[0].searchbox=true;
         this.classObject[0].fl=true;
         this.classObject[0].searchShow=false;
          this.classObject[0].gridcontent=false;
          this.classObject[0].navtim=false;
       }else{
          this.isShow = false
          this.classObject[0].searchbox=false;
          this.classObject[0].searchShow=true;
          this.classObject[0].gridcontent=true;
         this.classObject[0].navtim=true;
          this.classObject[0].fl=true;
       }
     }
  },
  
  created() {
     
  }
  ,
  mounted() {
  },
  methods: {
       
  }
}
</script>

<style scoped>
.gridcontent {
  height: 90px;
}
.searchShow{
  padding-left: 325px;
  box-sizing: border-box;
}
.m-nav{
  box-sizing: border-box;
}
.icon{
  width: 62px;
  height: 46px;
  margin-top: 35px;
  padding-right: 5px;
}
.icon-title{
  margin-top: 34px;
  width: 298px;
  height: 32px;
}
.title{
  color: #209AFB;
  font-size: 23px;
  font-family: "宋体-简","黑体";
  letter-spacing: -1px;
  line-height: 32px;
}
.s-title{
  font-family: "苹方-简" ,"常规体";
  color: #4D4D4D;
  font-size: 12px;
  letter-spacing: 0.4px;
  line-height: 17px;
}
.searchbox,.searchShow{
  margin-left: 72px;
  margin-top: 27px;
}
.searchbox .search-table .active,.searchShow .search-table .active{
  background: #219AFB;
  color: #FFFFFF;
  width: 40px;
  height: 22px;
}
.searchbox .search-table li,.searchShow .search-table li{
  width: 40px;
  height: 22px;
  padding: 3px 7.5px;
  color: #494949;
  font-size: 12px;
  text-align: center;
}
#search-input{
  width: 366px;
  height: 36px;
  border:2px solid #219AFB;
  border-radius: 1px;
  outline: none;
}
input::-webkit-input-placeholder{
  color: #AFAFAF;
  font-size: 12px;
  padding-left: 34px;
}
#search-button{
  width: 70px;
  height: 36px;
  background: #219AFB;
  border-radius: 0px 2px 2px 0px;
  outline: none;
  border:  2px solid #219AFB;
  margin-left: -6px;
  color: #FFFFFF;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #FFFFFF;
  line-height: 19px;
  letter-spacing: 2px;
}
.shopcar{
  margin-top: 65px;
  margin-left: 12%;
}
.login{
  width: 108px;
  height: 36px;
}
#login-btn{
  margin-top: 55px;
  margin-left: 20px;
}
.nav{
  margin-top: 10px;
}
.navtim{
  margin-top: 0;
}
.nav ul li,.navtim ul li{
font-size: 14px;
font-family: MicrosoftYaHei;
color: #494949;
line-height: 19px;
padding: 19px;
}
.nav ul .first-li,.navtim ul .first-li{
  padding-left: 0;
}
.nav ul li .active,.nav ul .first-li,.navtim ul li .active{
  color: #494949;
  font-family: Helvetica;
  letter-spacing: 0.8px;
}
</style>
