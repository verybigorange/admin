import Vue from 'vue'
import Router from 'vue-router'
import { Message } from 'element-ui'
import md5 from 'md5'

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
        path: "newsAdd",
        component: resolve => require(['admin/news/add.vue'], resolve),
        meta: {
          admin: true
        },
      },
       //新闻详情页
      {
        path: "newsDetail",
        component: resolve => require(['admin/news/detail.vue'], resolve),
        meta: {
          admin: true
        },
      },
       //新闻详情页
      {
        path: "newsEdit",
        component: resolve => require(['admin/news/edit.vue'], resolve),
        meta: {
          admin: true
        },
      },
      // 作品页
      {
        path: "works",
        component: resolve => require(['admin/works/index.vue'], resolve),
        meta: {
          admin: true
        },
      },
      //作品添加页
      {
        path: "worksAdd",
        component: resolve => require(['admin/works/add.vue'], resolve),
        meta: {
          admin: true
        },
      },
      //作品编辑页
      {
        path: "worksEdit",
        component: resolve => require(['admin/works/edit.vue'], resolve),
        meta: {
          admin: true
        },
      },
      //作品详情页
      {
        path: "worksDetail",
        component: resolve => require(['admin/works/detail.vue'], resolve),
        meta: {
          admin: true
        },
      },
      // 相册页
      {
        path: "photo",
        component: resolve => require(['admin/photo/index.vue'], resolve),
        meta: {
          admin: true
        },
      },
      // 相册页
      {
        path: "photoAdd",
        component: resolve => require(['admin/photo/add.vue'], resolve),
        meta: {
          admin: true
        },
      },
      //相册编辑页
      {
        path: "photoEdit",
        component: resolve => require(['admin/photo/edit.vue'], resolve),
        meta: {
          admin: true
        },
      }
    ]
  }
]

Vue.use(Router)

const router = new Router({
  routes:adminRouter
})

router.beforeEach((to,from,next)=>{
  // 如果是属于后台管理才做拦截
  if(!to.meta.admin){
    next()
    return false;
  } 
  //登录拦截
  if(sessionStorage.getItem("login") && sessionStorage.getItem("login") === md5('access')){
    next()
  }else if(to.path!=="/login"){
    Message({
      message:"请登录",
      type:"warning"
    });
    next({
        path: '/login',
        query: {redirect: to.fullPath}  //登录成功后进入上次点击的页面
    })
  }else{
    next()
  }
 
})

export default router


