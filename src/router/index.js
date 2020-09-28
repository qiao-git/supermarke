import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: () => import('@/views/index/index.vue'),
      meta: { title: '金牌服务超市'}
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue'),
      meta: { title: '登陆'}
    },
    {
      path: '/mechanism',
      name: 'Mechanism',
      component: () => import('@/views/ServiceOrganization/index.vue'),
      meta: { title: '金牌服务超市-服务机构'}
    },
    {
      path: '/adviser',
      name: 'Adviser',
      component: () => import('@/views/ActivityTraining/index.vue'),
      meta: { title: '金牌服务超市-服务顾问'}
    },
    {
      path: '/activity',
      name: 'Activity',
      component: () => import('@/views/ServiceConsultant/index.vue'),
      meta: { title: '金牌服务超市-活动培训'}
    }
  ]
})

