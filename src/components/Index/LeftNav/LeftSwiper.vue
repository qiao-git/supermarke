<template>
    <div class="swiper-box">
        <div class="swiper-container leftswiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../../assets/image/timg.jpeg" alt="">
                    <div class="swiper-text">
                        <h1>顶呱呱法律咨询服务</h1>
                        <ul class="service-data clearfix">
                            <li class="fl">
                                <p>30万</p>
                                <span>服务客户</span>
                            </li>
                            <li class="fl">
                                <p>95%</p>
                                <span>胜诉率</span>
                            </li>
                            <li class="fl" style="border:none;">
                                <p>100+人</p>
                                <span>金牌团队</span>
                            </li>
                        </ul>
                        <ul class="introduce clearfix">
                            <li class="fl">专业权威</li>
                            <li class="fl">客户信任</li>
                            <li class="fl">民事/刑事/非讼</li>
                            <li class="fl" style="border:none;">更多法律支持</li>
                        </ul>
                            <el-button type="primary" class="consulting">主要按钮</el-button>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="../../../assets/image/timg.jpeg" alt="">
                    <div class="swiper-text">
                        <h1>顶呱呱法律咨询服务</h1>
                            <ul class="service-data clearfix">
                            <li class="fl">
                                <p>30万</p>
                                <span>服务客户</span>
                            </li>
                            <li class="fl">
                                <p>95%</p>
                                <span>胜诉率</span>
                            </li>
                            <li class="fl" style="border:none;">
                                <p>100+人</p>
                                <span>金牌团队</span>
                            </li>
                        </ul>
                        <ul class="introduce clearfix">
                            <li class="fl">专业权威</li>
                            <li class="fl">客户信任</li>
                            <li class="fl">民事/刑事/非讼</li>
                            <li class="fl" style="border:none;">更多法律支持</li>
                        </ul>
                            <el-button type="primary" class="consulting">主要按钮</el-button>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="../../../assets/image/timg.jpeg" alt="">
                    <div class="swiper-text">
                        <h1>顶呱呱法律咨询服务</h1>
                            <ul class="service-data clearfix">
                            <li class="fl">
                                <p>30万</p>
                                <span>服务客户</span>
                            </li>
                            <li class="fl">
                                <p>95%</p>
                                <span>胜诉率</span>
                            </li>
                            <li class="fl" style="border:none;">
                                <p>100+人</p>
                                <span>金牌团队</span>
                            </li>
                        </ul>
                        <ul class="introduce clearfix">
                            <li class="fl">专业权威</li>
                            <li class="fl">客户信任</li>
                            <li class="fl">民事/刑事/非讼</li>
                            <li class="fl" style="border:none;">更多法律支持</li>
                        </ul>
                            <el-button type="primary" class="consulting">主要按钮</el-button>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="../../../assets/image/timg.jpeg" alt="">
                    <div class="swiper-text">
                        <h1>顶呱呱法律咨询服务</h1>
                            <ul class="service-data clearfix">
                            <li class="fl">
                                <p>30万</p>
                                <span>服务客户</span>
                            </li>
                            <li class="fl">
                                <p>95%</p>
                                <span>胜诉率</span>
                            </li>
                            <li class="fl" style="border:none;">
                                <p>100+人</p>
                                <span>金牌团队</span>
                            </li>
                        </ul>
                        <ul class="introduce clearfix">
                            <li class="fl">专业权威</li>
                            <li class="fl">客户信任</li>
                            <li class="fl">民事/刑事/非讼</li>
                            <li class="fl" style="border:none;">更多法律支持</li>
                        </ul>
                            <el-button type="primary" class="consulting">主要按钮</el-button>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="../../../assets/image/timg.jpeg" alt="">
                    <div class="swiper-text">
                        <h1>顶呱呱法律咨询服务</h1>
                            <ul class="service-data clearfix">
                            <li class="fl">
                                <p>30万</p>
                                <span>服务客户</span>
                            </li>
                            <li class="fl">
                                <p>95%</p>
                                <span>胜诉率</span>
                            </li>
                            <li class="fl" style="border:none;">
                                <p>100+人</p>
                                <span>金牌团队</span>
                            </li>
                        </ul>
                        <ul class="introduce clearfix">
                            <li class="fl">专业权威</li>
                            <li class="fl">客户信任</li>
                            <li class="fl">民事/刑事/非讼</li>
                            <li class="fl" style="border:none;">更多法律支持</li>
                        </ul>
                            <el-button type="primary" class="consulting">主要按钮</el-button>
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
    data() {
        return {
            
        }
    },
    methods:{
          initSwiper(){
			new Swiper('.swiper-container', {
					 loop: true, // 循环模式选项
                      autoplay: {
                        delay: 2000,//2秒切换一次
                    },
                    // 如果需要分页器
                    pagination: {
                    el: '.swiper-pagination',
                    },
			}); 
        }
    },
    mounted(){
        this.initSwiper()
    }
}
</script>
<style scoped>
.swiper-box{
    width: 940px;
    position: absolute;
    top: 0;
    left: 260px;
}
.swiper-container {
     width: 940px;
    height: 321px;
}
.swiper-container .swiper-pagination>>>.swiper-pagination-bullet {
    width: 35px;
    height: 10px;
    display: inline-block;
    border-radius: 0;
    background: #000;
    opacity: .2;
}
.swiper-container .swiper-pagination>>>.swiper-pagination-bullet-active {
        opacity: 1;
    background: #007aff;
}
.swiper-container>>>.swiper-pagination{
    text-align: start;
    padding-left: 30px;
}
.swiper-slide{
    position: relative;
}
.swiper-text{
    position: absolute;
    top: 80px;
    left: 30px;
}
.swiper-text h1{
    color: #fff;
    font-size: 30px;
    padding:0 20px;
}
.service-data li{
    padding:0 20px;
    border-right: 1px solid #757575;
}
.service-data li p{
    color: #0987F4;
    font-size: 14px;
    font-weight: 700;
}
.service-data li span {
    color: #0F57A7;
    font-size: 12px;
}
.introduce li{
    margin-top: 20px;
    color: #0987F4;
    font-size: 14px;
    font-weight: 700;
    padding:0 20px;
    border-right: 1px solid #757575;
}
.consulting{
    margin: 30px 0px 0px 20px;
}
</style>