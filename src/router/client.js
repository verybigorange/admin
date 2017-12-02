const clientRouter = [
     {
        path: "/",
        component: resolve => require(['client/index'], resolve),
      },
]

export default clientRouter