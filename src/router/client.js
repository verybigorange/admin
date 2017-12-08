const clientRouter = [
     {
        path: "/",
        component: resolve => require(['client/index'], resolve)
      },
      {
        path: "/news",
        component: resolve => require(['client/news'], resolve),
        children: [
          {
            path: "",
            component: resolve => require(['client/news/NewsContent'], resolve),
          },
          {
            path: "detail",
            component: resolve => require(['client/news/NewsDetail'], resolve),
          }
        ]
      },
      {
        path: "/works",
        component: resolve => require(['client/works'], resolve),
        children: [
          {
            path: "",
            component: resolve => require(['client/works/WorksContent'], resolve)
          },
          {
            path: 'detail',
            component: resolve => require(['client/works/WorksDetail'], resolve)
          }
        ]
      },
      {
        path: "/album",
        component: resolve => require(['client/album'], resolve),
      }
]

export default clientRouter