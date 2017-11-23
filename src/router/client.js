const clientRouter = [
     // 登录页
     {
        path: "/",
        component: resolve => require(['client/index.vue'], resolve),
      },
]

export default clientRouter