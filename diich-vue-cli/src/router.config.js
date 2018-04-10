import Home from './components/home.vue'
import News from './components/news.vue'
import Cosplay from './components/cosplay.vue'
import List from './components/cosplay/list.vue'
import Create from './components/cosplay/create.vue'

export default {
  routes:[
    {
      path:'/home',
      component: Home
    },
    {
      path:'/cosplay',
      component: Cosplay,
      children:[                         //子路由
        {
          path:'list',
          component: List
        },
        {
          path:'create',
          component: Create
        },
        {
          path:'/',                   //默认跳转的路由
          redirect:'list'
        }
      ]
    },
    {
      path:'/news',
      component: News
    },
    {
      path:'/',                   //默认跳转的路由
      redirect:'/home'
    }
  ]
}
