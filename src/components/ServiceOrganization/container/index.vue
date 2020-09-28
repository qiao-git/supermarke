<template>
  <div class="m-ServiceContainer">
    <NavSearch />
    <div class="Service-Sort clearfix">
      <div class="Screening-name fl">
        <span>排&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;序:</span>
      </div>
      <ul class="sort-list fl">
        <li class="fl active">综合</li>
        <li class="fl">人气</li>
        <li class="fl">好评</li>
        <li class="fl">服务量</li>
      </ul>
      <div class="sort-search fl">
        <div class="Screening-name fl">
          <span>关&nbsp;键&nbsp;词:</span>
        </div>
        <div class="sort-search-input fl">
          <input
            type="text"
            name=""
            id="search-sort"
            class="fl"
            placeholder="请输入关键词"
          />
          <el-button type="primary" class="fl" id="search-btn">确定</el-button>
        </div>
      </div>
    </div>
    <div class="Service-content">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="content-box clearfix">
              <div class="left-Img-ico fl">
                <img src="../../../assets/image/杨幂.jpeg" alt="" />
              </div>
              <div class="right-text fl">
                <h2 class="title">南京联合会计师事务所（普通合伙）</h2>
                <div class="label">
                  <span class="authentication">已认证</span>
                  <span class="member">会员机构</span>
                </div>
                <p class="call">电话：0512-66556688</p>
                <p class="address">地址：江苏省南京市江宁区清水亭东路109号</p>
                <div class="evaluation-information clearfix">
                  <div class="block fl">
                    <el-rate v-model="value1" disabled></el-rate>
                  </div>
                  <span class="fl num-eval">8<i>条评价</i></span>
                  <span class="fl num-transaction">52<i>笔累计交易</i></span>
                </div>
                <div class="m-btn">
                  <el-button type="primary" class="demand">提需求</el-button>
                  <el-button class="evaluation">写评价</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
           <div class="grid-content bg-purple">
            <div class="content-box clearfix">
              <div class="left-Img-ico fl">
                <img src="../../../assets/image/杨幂.jpeg" alt="" />
              </div>
              <div class="right-text fl">
                <h2 class="title">南京联合会计师事务所（普通合伙）</h2>
                <div class="label">
                  <span class="authentication">已认证</span>
                  <span class="member">会员机构</span>
                </div>
                <p class="call">电话：0512-66556688</p>
                <p class="address">地址：江苏省南京市江宁区清水亭东路109号</p>
                <div class="evaluation-information clearfix">
                  <div class="block fl">
                    <el-rate v-model="value1" disabled></el-rate>
                  </div>
                  <span class="fl num-eval">8<i>条评价</i></span>
                  <span class="fl num-transaction">52<i>笔累计交易</i></span>
                </div>
                <div class="m-btn">
                  <el-button type="primary" class="demand">提需求</el-button>
                  <el-button class="evaluation">写评价</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="content-box clearfix">
              <div class="left-Img-ico fl">
                <img src="../../../assets/image/杨幂.jpeg" alt="" />
              </div>
              <div class="right-text fl">
                <h2 class="title">南京联合会计师事务所（普通合伙）</h2>
                <div class="label">
                  <span class="authentication">已认证</span>
                  <span class="member">会员机构</span>
                </div>
                <p class="call">电话：0512-66556688</p>
                <p class="address">地址：江苏省南京市江宁区清水亭东路109号</p>
                <div class="evaluation-information clearfix">
                  <div class="block fl">
                    <el-rate v-model="value1" disabled></el-rate>
                  </div>
                  <span class="fl num-eval">8<i>条评价</i></span>
                  <span class="fl num-transaction">52<i>笔累计交易</i></span>
                </div>
                <div class="m-btn">
                  <el-button type="primary" class="demand">提需求</el-button>
                  <el-button class="evaluation">写评价</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
           <div class="grid-content bg-purple">
            <div class="content-box clearfix">
              <div class="left-Img-ico fl">
                <img src="../../../assets/image/杨幂.jpeg" alt="" />
              </div>
              <div class="right-text fl">
                <h2 class="title">南京联合会计师事务所（普通合伙）</h2>
                <div class="label">
                  <span class="authentication">已认证</span>
                  <span class="member">会员机构</span>
                </div>
                <p class="call">电话：0512-66556688</p>
                <p class="address">地址：江苏省南京市江宁区清水亭东路109号</p>
                <div class="evaluation-information clearfix">
                  <div class="block fl">
                    <el-rate v-model="value1" disabled></el-rate>
                  </div>
                  <span class="fl num-eval">8<i>条评价</i></span>
                  <span class="fl num-transaction">52<i>笔累计交易</i></span>
                </div>
                <div class="m-btn">
                  <el-button type="primary" class="demand">提需求</el-button>
                  <el-button class="evaluation">写评价</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="content-box clearfix">
              <div class="left-Img-ico fl">
                <img src="../../../assets/image/杨幂.jpeg" alt="" />
              </div>
              <div class="right-text fl">
                <h2 class="title">南京联合会计师事务所（普通合伙）</h2>
                <div class="label">
                  <span class="authentication">已认证</span>
                  <span class="member">会员机构</span>
                </div>
                <p class="call">电话：0512-66556688</p>
                <p class="address">地址：江苏省南京市江宁区清水亭东路109号</p>
                <div class="evaluation-information clearfix">
                  <div class="block fl">
                    <el-rate v-model="value1" disabled></el-rate>
                  </div>
                  <span class="fl num-eval">8<i>条评价</i></span>
                  <span class="fl num-transaction">52<i>笔累计交易</i></span>
                </div>
                <div class="m-btn">
                  <el-button type="primary" class="demand">提需求</el-button>
                  <el-button class="evaluation">写评价</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
           <div class="grid-content bg-purple">
            <div class="content-box clearfix">
              <div class="left-Img-ico fl">
                <img src="../../../assets/image/杨幂.jpeg" alt="" />
              </div>
              <div class="right-text fl">
                <h2 class="title">南京联合会计师事务所（普通合伙）</h2>
                <div class="label">
                  <span class="authentication">已认证</span>
                  <span class="member">会员机构</span>
                </div>
                <p class="call">电话：0512-66556688</p>
                <p class="address">地址：江苏省南京市江宁区清水亭东路109号</p>
                <div class="evaluation-information clearfix">
                  <div class="block fl">
                    <el-rate v-model="value1" disabled></el-rate>
                  </div>
                  <span class="fl num-eval">8<i>条评价</i></span>
                  <span class="fl num-transaction">52<i>笔累计交易</i></span>
                </div>
                <div class="m-btn">
                  <el-button type="primary" class="demand">提需求</el-button>
                  <el-button class="evaluation">写评价</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="content-box clearfix">
              <div class="left-Img-ico fl">
                <img src="../../../assets/image/杨幂.jpeg" alt="" />
              </div>
              <div class="right-text fl">
                <h2 class="title">南京联合会计师事务所（普通合伙）</h2>
                <div class="label">
                  <span class="authentication">已认证</span>
                  <span class="member">会员机构</span>
                </div>
                <p class="call">电话：0512-66556688</p>
                <p class="address">地址：江苏省南京市江宁区清水亭东路109号</p>
                <div class="evaluation-information clearfix">
                  <div class="block fl">
                    <el-rate v-model="value1" disabled></el-rate>
                  </div>
                  <span class="fl num-eval">8<i>条评价</i></span>
                  <span class="fl num-transaction">52<i>笔累计交易</i></span>
                </div>
                <div class="m-btn">
                  <el-button type="primary" class="demand">提需求</el-button>
                  <el-button class="evaluation">写评价</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
           <div class="grid-content bg-purple">
            <div class="content-box clearfix">
              <div class="left-Img-ico fl">
                <img src="../../../assets/image/杨幂.jpeg" alt="" />
              </div>
              <div class="right-text fl">
                <h2 class="title">南京联合会计师事务所（普通合伙）</h2>
                <div class="label">
                  <span class="authentication">已认证</span>
                  <span class="member">会员机构</span>
                </div>
                <p class="call">电话：0512-66556688</p>
                <p class="address">地址：江苏省南京市江宁区清水亭东路109号</p>
                <div class="evaluation-information clearfix">
                  <div class="block fl">
                    <el-rate v-model="value1" disabled></el-rate>
                  </div>
                  <span class="fl num-eval">8<i>条评价</i></span>
                  <span class="fl num-transaction">52<i>笔累计交易</i></span>
                </div>
                <div class="m-btn">
                  <el-button type="primary" class="demand">提需求</el-button>
                  <el-button class="evaluation">写评价</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 分页器 -->
     <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" />
  </div>
</template>

<script>
import NavSearch from "./navsearch";
import Pagination from '@/components/Pagination'
export default {
  name: "ServiceContainer",
  props: {},
  data() {
    return {
      value1: 5,
      datalist: null,
            total: 240,
            listLoading: false,
            listQuery: {
                name: null,
                status: null,
                page: 1,
                limit: 8
            },
    };
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    NavSearch,
    Pagination
  },
};
</script>

<style scoped>
.Service-Sort {
  box-sizing: border-box;
  margin-top: 30px;
  height: 72px;
  background: #fff;
}
.Service-Sort .Screening-name {
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #4d4d4d;
  line-height: 21px;
  padding: 25px 0 26px 42px;
}
.sort-list .active {
  font-size: 16px;
  color: #009cff;
}
.sort-list {
  padding: 25px 0 26px 42px;
}
.sort-list li {
  padding: 0 18px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #4d4d4d;
  line-height: 21px;
}
.sort-search {
  padding-left: 348px;
}
.sort-search .Screening-name {
  height: 21px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #4d4d4d;
  line-height: 21px;
  padding-left: 0;
}
.sort-search-input {
  width: 298px;
  height: 36px;
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid #dbdbdb;
  margin-top: 17px;
  margin-left: 42px;
}
#search-sort {
  height: 36px;
  width: 227px;
  border: none;
  outline: none;
  padding-left: 12px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: #969696;
  box-sizing: border-box;
}
#search-btn {
  width: 71px;
  height: 36px;
  border-radius: 0;
}

.el-row {
  margin: 18px 0 9px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 296px;
  padding-left: 28px;
  padding-top: 28px;
}
.grid-content .left-Img-ico {
  width: 142px;
  height: 135px;
  border: 1px solid #dbdbdb;
}
.grid-content .left-Img-ico img {
  width: 100px;
  height: 100px;
  padding-left: 21px;
  padding-top: 12.5px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.block >>> .el-rate__item .el-rate__icon {
  color: #219afb !important;
}
.right-text {
  padding-left: 20px;
}
.right-text .title {
  height: 21px;
  font-size: 16px;
  font-family: Helvetica;
  color: #4d4d4d;
  line-height: 19px;
}
.right-text .label {
  padding-top: 14px;
}
.right-text .authentication {
  width: 48px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #219afb;
  font-size: 12px;
  font-family: MicrosoftYaHei;
  color: #009cff;
  line-height: 16px;
  padding: 3px 6px;
  box-sizing: border-box;
}
.right-text .member {
  width: 60px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid #ff8c00;
  font-size: 12px;
  font-family: MicrosoftYaHei;
  color: #ff8c00;
  line-height: 20px;
  padding: 3px 6px;
}
.right-text .call {
  height: 21px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #969696;
  line-height: 21px;
  padding-top: 18px;
}
.right-text .address {
  width: 319px;
  height: 22px;
  font-family: MicrosoftYaHei;
  color: #969696;
  line-height: 22px;
  padding-top: 10px;
}
.evaluation-information {
  padding-top: 23px;
}
.num-eval {
  height: 24px;
  font-size: 18px;
  font-family: Helvetica;
  color: #219afb;
  line-height: 22px;
  padding-left: 32px;
}
.num-eval > i {
  height: 21px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #969696;
  line-height: 21px;
  margin-left: 4px;
}
.num-transaction {
  height: 24px;
  font-size: 18px;
  font-family: Helvetica;
  color: #219afb;
  line-height: 22px;
  padding-left: 32px;
}
.num-transaction i {
  width: 81px;
  height: 21px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  color: #969696;
  line-height: 21px;
  padding-left: 4px;
}
.num-transaction,.num-eval{
    position: relative;
}
.num-transaction::before,
.num-eval::before {
  content: "";
  display: block;
  width: 1px;
  height: 12px;
  background: #979797;
  position: absolute;
  left: 15px;
  top: 5px;
}
.m-btn{
    padding-top: 28px;
}
.m-btn .demand{
    width: 110px;
    height: 36px;
    background: #219AFB;
    border-radius: 2px;
    padding: 0;
}
.m-btn .demand>>>span {
    height: 21px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #FFFFFF;
    line-height: 21px;

}
.m-btn .evaluation{
    width: 110px;
    height: 36px;
    border-radius: 2px;
    border: 1px solid #219AFB;
    padding: 0;

}
.m-btn .evaluation>>>span{
    height: 21px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #219AFB;
    line-height: 21px;

}
</style>
