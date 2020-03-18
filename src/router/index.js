import Vue from 'vue'
import Router from 'vue-router'

const Sdk = () => import('@/page/sdk')
const Manage = () => import('@/components/manage')
const App = () => import('@/page/App')
const Js = () => import('@/page/js')
const manage = () => import('@/page/manage')
// import Manage from '@/components/manage'
// import App from '@/page/App'
// import Js from '@/page/js'
// import Sdk from '@/page/sdk'
//import manage from '@/page/manage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/manage',
      component: Manage,
      children:[
        {
          path:'',
          component:manage
        },
        {
          path:'/app',
          component:App,
          meta:["媒体管理","媒体列表"]
        },
        {
          path:'/sdk',
          component:Sdk
        },
        {
          path:'/js',
          component:Js
        },
        {
          path:'/manage',
          component:manage
        },
      ]
    },
    { 
      path: '*', 
      redirect: '/manage' 
    }
  ]
})
