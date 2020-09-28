<template>
  <div class="u-NavSearch">
    <div class="Screening-criteria clearfix">
      <div class="Screening-name fl">
        <span>业务领域：</span>
      </div>
      <ul class="Screening-list fl clearfix">
        <li class="fl active">不限</li>
        <li class="fl">财税服务</li>
        <li class="fl">法律服务</li>
        <li class="fl">人力资源</li>
        <li class="fl">知识产权</li>
        <li class="fl">供应链服务</li>
        <li class="fl">管理咨询</li>
        <li class="fl">金融服务</li>
        <li class="fl">评估认证</li>
      </ul>
      <div class="change-btn fl">更多<i class="el-icon-arrow-down icon"></i></div>
    </div>
    <div class="Region-selection clearfix">
        <div class="Screening-name fl">
         <span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区:</span>
        </div>
        <div class="selection-ipt fl">
            <input type="text" name="" id="selection" placeholder="点击选择地区">
        </div>
        <div class="vip-box fl clearfix">
            <div class="Screening-name fl">
                <span>会&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;员:</span>
            </div>
            <ul class="vip-list fl  clearfix">
                <li class="active fl">不限</li>
                <li class="fl">是</li>
                <li class="fl">否</li>
            </ul>
        </div>
    </div>
    <div class="u-more">
        <p>更多筛选条件<i class="el-icon-arrow-down icon"></i></p>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavSearch",
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {


  },
  components:{

  }
};
</script>

<style scoped>
.u-NavSearch {
    height: 212px;
    background: #FFFFFF;
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.05);
  margin-top: -106px;
}
.Screening-criteria{
    padding-left: 40px;
    padding-top: 32px;
}
.Region-selection{
    padding-left: 40px;
}
.Region-selection .Screening-name {
    padding-top: 40px;
}
.Screening-name span {
    height: 21px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #4D4D4D;
    line-height: 21px;
}
.Screening-list .active{
    height: 21px;
    font-size: 16px;
    font-weight: 700;
    color: #009CFF;
    line-height: 21px;
}
.Screening-list li {
    height: 21px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #4D4D4D;
    line-height: 21px;
    padding: 0 19px;
}
.change-btn{
    padding-left: 66px;
    height: 21px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #009CFF;
    line-height: 21px;
}
.change-btn .icon{
    padding-left: 8px;
}

.selection-ipt{
    width: 300px;
    height: 38px;
    margin-left: 29px;
    margin-top: 32px;
}
#selection{
    width: 300px;
    height: 38px;
    background: #FFFFFF;
    border-radius: 2px;
    border: 1px solid #DBDBDB;
    outline: none;
    padding-left: 12px;
}
.vip-box {
    padding-left: 292px;
}
.vip-box .vip-list{
    padding-top: 40px;
}
.vip-box .vip-list li {
    padding: 0 21px;
    height: 21px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #4D4D4D;
    line-height: 21px;
}
.vip-box .vip-list .active{
    height: 21px;
    font-size: 16px;
    color: #009CFF;
    line-height: 21px;
}

.u-more{
    height: 53px;
    margin-top: 34.5px;
    box-sizing: border-box;
    text-align: center;
    line-height: 53px;
    position: relative;
}
.u-more::after{
    content: '';
    width: 1161px;
    height: 2px;
    background: #EAEAEA;
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
.u-more p {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #009CFF;
}
</style>