<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :pager-count="9"
      :page-sizes="pageSizes"
      :total="total"
      :prev-text="changePage.pre"
      :next-text="changePage.nex"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scroll-to'

export default {
  name: 'Pagination',
  data(){
    return{
       changePage:{
          pre:"上一页",
          nex:"下一页"
      }
    }
  },
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'prev, pager, next,slot'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, limit: val })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style scoped>
.pagination-container {
  /* background: #fff; */
  padding: 32px 16px;
  width: 100%;
}
.pagination-container.hidden {
  display: none;
}
.el-pagination{
  width: 547px;
  margin: 0 auto;
}
.pagination-container>>>.el-pagination.is-background .btn-next,.pagination-container>>>.el-pagination.is-background .btn-prev,.pagination-container>>>.el-pagination.is-background .el-pager li{
  background: #fff;
}
.pagination-container>>>.el-pagination.is-background .btn-next.disabled, .pagination-container>>>.el-pagination.is-background .btn-next:disabled, .pagination-container>>>.el-pagination.is-background .btn-prev.disabled, .pagination-container>>>.el-pagination.is-background .btn-prev:disabled, .pagination-container>>>.el-pagination.is-background .el-pager li.disabled {  
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  line-height: 14px;
}
.pagination-container>>>.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #409EFF;
    color: #FFF;
}
.pagination-container>>>.btn-prev,.pagination-container>>>.btn-next{
  width: 66px;
  height: 32px;
  background: #FFFFFF;
  border-radius: 2px;
  border: 1px solid #DBDBDB;
 

}
</style>
