import Vue from 'vue'
import Router from 'vue-router'

const adminRouter = [
    // 登录页
    {
      path: "/login",
      component: resolve => require(['admin/common/login.vue'], resolve),
    },
    {
      path: '/admin',
      name: 'layout',
      component: resolve => require(['admin/common/layout.vue'], resolve),
      meta: {
        admin: true
      },
      children: [
        //修改密码
        {
          path: "changepsd",
          component: resolve => require(['admin/common/changePsd.vue'], resolve),
          meta: {
            admin: true
          },
        },
        // 首页
        {
          path: "home",
          component: resolve => require(['admin/home.vue'], resolve),
          meta: {
            admin: true
          },
        },
        // 新闻页
        {
          path: "news",
          component: resolve => require(['admin/news/index.vue'], resolve),
          meta: {
            admin: true
          },
        },
        //新闻添加页
        {
          path: "news_add",
          component: resolve => require(['admin/news/add.vue'], resolve),
          meta: {
            admin: true
          },
        },
        // 作品页
        {
          path: "works",
          component: resolve => require(['admin/works.vue'], resolve),
          meta: {
            admin: true
          },
        },
        // 相册页
        {
          path: "photo",
          component: resolve => require(['admin/photo.vue'], resolve),
          meta: {
            admin: true
          },
        }
      ]
    }
]

export default adminRouter