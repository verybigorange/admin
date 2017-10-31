import Vue from 'vue'
import Router from 'vue-router'
import layout from 'views/common/layout'
import home from 'views/home'
import news from 'views/news'
import works from 'views/works'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
        {
          path:"home",
          component:home
        },
        {
          path:"news",
          component:news
        },
        {
          path:"works/:type",
          component:works
        }
      ]
    }
  ]
})
