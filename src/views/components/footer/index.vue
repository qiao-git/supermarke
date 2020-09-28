<template>
  <div class="g-footer">
    <div class="footer-top-list wrapper">
          <div class="Presale fl">
            <dl>
              <dt>售前咨询热线</dt>
              <dt>4000-969696</dt>
              <dd>
                <router-link to="#">专家在线咨询</router-link>
              </dd>
              <dd>
                <router-link to="#">全站商品速查</router-link>
              </dd>
            </dl>
          </div>
          <el-row :gutter="20">
            <el-col :span="4" :offset="2" class="clearfix">
              <div class="platform fl">
                <dl>
                  <dt class="title">平台指南</dt>
                  <dd>
                    <router-link to="#">下单流程</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">账户与密码</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">联系客服</router-link>
                  </dd>
                </dl>
              </div>
            </el-col>
            <el-col :span="3" class="clearfix">
              <div class="payment fl">
                <dl>
                  <dt class="title">支付方式</dt>
                  <dd>
                    <router-link to="#">在线付款</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">线下付款</router-link>
                  </dd>
                </dl>
              </div>
            </el-col>
            <el-col :span="4" class="clearfix">
              <div class="After-sale fl">
                <dl>
                  <dt class="title">售后服务</dt>
                  <dd>
                    <router-link to="#">售后说明</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">退款说明</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">资料往来说明</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">投诉与建议</router-link>
                  </dd>
                </dl>
              </div>
            </el-col>
            <el-col :span="4" class="clearfix">
              <div class="about fl">
                <dl>
                  <dt class="title">关于我们</dt>
                  <dd>
                    <router-link to="#">集团介绍</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">企业文化</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">发展历程</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">资质荣耀</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">分子公司</router-link>
                  </dd>
                </dl>
              </div>
            </el-col>
            <el-col :span="4" class="clearfix">
              <div class="follow fl">
                <dl style="text-align:center;">
                  <dt class="title">关注我们</dt>
                  <dd>
                    <router-link to="#">公众号二维码</router-link>
                  </dd>
                  <dd>
                    <router-link to="#">二维码占位</router-link>
                  </dd>
                </dl>
              </div>
            </el-col>
          </el-row>
    </div>
    <div class="footer-bottom-list wrapper">
          <div class="nav-list">
            <ul class="clearfix">
              <li class="fl">
                <router-link to="#">平台新闻</router-link>
              </li>
              <li class="fl line">
                <router-link to="#">行业咨询</router-link>
              </li>
              <li class="fl line">
                <router-link to="#">联系我们</router-link>
              </li>
              <li class="fl line">
                <router-link to="#">帮助中心</router-link>
              </li>
              <li class="fl line">
                <router-link to="#">用户协议</router-link>
              </li>
              <li class="fl line">
                <router-link to="#">隐私政策</router-link>
              </li>
            </ul>
            <p class="copy">
                Copyright&copy;2018-2019科科技科技股份有限公司版权所有保留一切权利备案号: ICP备 19000843号-7
            </p>
            <div class="report clearfix">
                <span class="call fl">举报电话：</span>
                <span class="fl">投诉电话：</span>
            </div>
            <ul class="image-list clearfix">
                <li class="fl">
                    <router-link to="#">
                        <img src="#" alt="占位">
                    </router-link>
                </li>
                <li class="fl">
                     <router-link to="#">
                        <img src="#" alt="占位">
                    </router-link>
                </li>
                <li class="fl">
                     <router-link to="#">
                        <img src="#" alt="占位">
                    </router-link>
                </li>
            </ul>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.g-footer {
  width: 100%;
  height: 394px;
  background-color: #3d3d3d;
  padding-top: 29px;
}
.Presale {
  position: relative;
}
.footer-top-list {
  position: relative;
}
.footer-top-list::before {
  content: "";
  display: block;
  height: 1px;
  width: 1200px;
  background-color: rgba(75, 75, 75, 1);
  position: absolute;
  bottom: -36px;
  left: 50%;
  transform: translateX(-50%);
}
.Presale::before {
  content: "";
  display: block;
  width: 1px;
  background: rgba(75, 75, 75, 1);
  position: absolute;
  height: 115px;
  right: -57px;
}

   
.Presale dl dt,
.platform dl dt,
.payment dl dt,
.After-sale dl dt,
.about dl dt,
.follow dl dt {
  color: #e9e9e9;
  font-size: 14px;
}

.title {
  margin-bottom: 29px;
}
dl {
  text-align: left;
  padding-left: 25px;
}
dd,.nav-list ul li a,.copy,.report {
  color: #9c9fa0;
  line-height: 27px;
  font-size: 12px;
}
a:hover,.nav-list ul li a:hover {
  color: #e9e9e9;
}
.footer-bottom-list {
  margin-top: 39px;
}
.nav-list ul li{
    padding: 6px 20px;
}
.line{
    position: relative;
}
.line::before{
    content: '';
    display: block;
    height: 15px;
    width: 1px;
    background: rgba(75, 75, 75, 1);
    position: absolute;
    left: 0;
    top: 12px;
}
.copy,.report{
    padding-left: 20px;
}
.call{
    display: block;
    width: 170px;
}
.image-list{
    margin-top: 30px;
}
</style>
