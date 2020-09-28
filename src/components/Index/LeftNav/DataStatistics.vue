<template>
    <div class="m-datastatistice clearfix">
        <div class="datastatistice-box first-data fl">
            <img src="../../../assets/image/人2@3x.png" alt="">
            <p>已注册买家</p>
            <span>23065<i>个</i></span>
        </div>
        <div class="datastatistice-box fl">
            <img src="../../../assets/image/机构@3x.png" alt="">
            <p>已收录机构</p>
            <span>3259<i>家</i></span>
        </div>
        <div class="datastatistice-box fl">
             <img src="../../../assets/image/活动@3x.png" alt="">
             <p>累计举报活动</p>
            <span>625<i>场</i></span>
        </div>
        <div class="datastatistice-box fl">
             <img src="../../../assets/image/补贴@3x.png" alt="">
             <p>累计补贴商家</p>
            <span>218<i>家</i></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
}
</script>
<style scoped>
    .m-datastatistice{
        width: 940px;
        height: 296px;
        background: #fff;
        position: absolute;
        top: 340px;
        left: 260px;
    }
    .datastatistice-box{
        width: 216px;
        height: 260px;
        background: #F4F6F9;
        margin: 18px 13px 18px 0;
        
    }
    .datastatistice-box img{
        padding: 32px 69px 0px 66px;
    }
    
    .first-data{
        margin-left: 18px;
    }
    .datastatistice-box p{
        height: 21px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #494949;
        line-height: 21px;
        padding: 39px 0 0;
        text-align: center;
        width: 100%;
    }
    .datastatistice-box span{
        height: 29px;
        font-size: 22px;
        font-family: Helvetica;
        color: #FF670A;
        line-height: 26px;
        width: 100%;
        display: block;
        text-align: center;
        padding:9px 0  0 10px;
        box-sizing: border-box;
    }
    .datastatistice-box i{
        height: 19px;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #AFAFAF;
        line-height: 19px;
        padding-left: 10px;
    }
</style>
