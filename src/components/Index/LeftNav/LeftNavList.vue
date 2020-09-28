<template>
    <div class="m-leftnav-list">
        <ul class="m-leftnav-list-box">
            <li class="nav-line">
                <router-link to="#" class="Navigation-index">财税服务<i class="el-icon-arrow-right"></i></router-link>
                <ul class="leftnav-list-son clearfix">
                    <li class="fl line"><router-link to="#">代理记账</router-link></li>
                    <li class="fl"><router-link to="#">年度财务审计</router-link></li>
                </ul>
            </li>
            <li class="nav-line">
                <router-link to="#" class="Navigation-index">法律服务<i class="el-icon-arrow-right"></i></router-link>
                <ul class="leftnav-list-son clearfix">
                    <li class="fl line"><router-link to="#">常年法律顾问</router-link></li>
                    <li class="fl"><router-link to="#">法律咨询</router-link></li>
                </ul>
            </li>
            <li class="nav-line">
                <router-link to="#" class="Navigation-index">人力资源<i class="el-icon-arrow-right"></i></router-link>
                <ul class="leftnav-list-son clearfix">
                    <li class="fl line"><router-link to="#">日常人事代理服务</router-link></li>
                    <li class="fl"><router-link to="#">招聘外包</router-link></li>
                </ul>
            </li>
            <li class="nav-line">
                <router-link to="#" class="Navigation-index">知识产权<i class="el-icon-arrow-right"></i></router-link>
                <ul class="leftnav-list-son clearfix">
                    <li class="fl line"><router-link to="#">国际专利 (国际)</router-link></li>
                    <li class="fl"><router-link to="#">商标服务 (国内)</router-link></li>
                </ul>
            </li>
            <li class="nav-line">
                <router-link to="#" class="Navigation-index">供应链服务<i class="el-icon-arrow-right"></i></router-link>
                <ul class="leftnav-list-son clearfix">
                    <li class="fl line"><router-link to="#">进出口供应链服务</router-link></li>
                    <li class="fl"><router-link to="#">预归类建议书</router-link></li>
                </ul>
            </li>
            <li class="nav-line">
                <router-link to="#" class="Navigation-index">实时大数据<i class="el-icon-arrow-right"></i></router-link>
                 <ul class="leftnav-list-son clearfix">
                    <li class="fl line"><router-link to="#">大数据采集服务</router-link></li>
                    <li class="fl"><router-link to="#">数据分析</router-link></li>
                </ul>
            </li>
            <li class="nav-line">
                <router-link to="#" class="Navigation-index">金融服务<i class="el-icon-arrow-right"></i></router-link>
                 <ul class="leftnav-list-son clearfix">
                    <li class="fl line"><router-link to="#">行业走势分析</router-link></li>
                    <li class="fl"><router-link to="#">风控管理</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="#" class="Navigation-index">管理咨询<i class="el-icon-arrow-right"></i></router-link>
                 <ul class="leftnav-list-son clearfix">
                    <li class="fl"><router-link to="#">国家高新技术企业项目申报</router-link></li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
}
</script>
<style scoped>
    .m-leftnav-list{
        background: #fff;
        height: 606px;
    }
    .Navigation-index{
        width: 57px;
        height: 19px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #494949;
        line-height: 19px;
    }
    .m-leftnav-list-box>li{
        height: 66px;
        padding: 5px;
        padding-left: 15px;
    }
    .m-leftnav-list-box .nav-line{
        position: relative;
    }
    .m-leftnav-list-box .nav-line::before{
        content: '';
        width: 204px;
        height: 1px;
        background:#EEEEEE;
        display: block;
        position: absolute;
        right: 7.5px;
        bottom: 6px;
        left: 15px;
    }
    .leftnav-list-son{
        padding-top: 5px;
    }
    .leftnav-list-son>li{
        padding-right: 15px;
    }
    .leftnav-list-son>li>a{
        height: 16px;
        font-size: 12px;
        font-family: MicrosoftYaHei;
        color: #969696;
        line-height: 16px;
    }
    .leftnav-list-son .line{
        position: relative;
    }
    .leftnav-list-son .line::before{
        content: '';
        width: 1px;
        height: 9px;
        background:rgba(97, 97, 97, .33);
        display: block;
        position: absolute;
        right: 7.5px;
        top: 8px;
    }
</style>