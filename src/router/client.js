const clientRouter = [
     {
        path: "/",
        component: resolve => require(['client/index'], resolve)
      },
      {
        path: "/news",
        component: resolve => require(['client/news'], resolve)
      },
      {
        path: "/works",
        component: resolve => require(['client/works'], resolve)
      }
]

export default clientRouter