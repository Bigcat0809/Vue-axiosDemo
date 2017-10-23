import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Repository from '@/components/repository'
import Login from '@/components/login'
import store from '@/store/store'
import * as types from '@/store/types'
Vue.use(VueRouter)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: HelloWorld
//     }
//   ]
// })
//首先在定义路由的时候就需要多添加一个自定义字段requireAuth，用于判断该路由的访问是否需要登录。如果用户已经登录，则顺利进入路由，否则就进入登录页面
const routes=[
  {
    path:'/',
    name:'/',
    component:Index
  },
  {
    path:'/repository',
    name:'/repository',
    // 添加该字段，表示进入这个路由是需要登录的
    meta:{
      requireAuth:true
    },
    component:Repository
  },
  {
    path:'/login',
    name:'/login',
    component:Login
  }
]
// 定义完路由后，我们主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断,根据不同的条件进入不同的路由页面
//一：创建一个路由器实例
const router = new VueRouter({
  routes
});
// 页面刷新时，重新赋值token
if(window.localStorage.getItem('token')){
  store.commit(types.LOGIN,window.localStorage.getItem('token'))
}
// 全局导航钩子
router.beforeEach((to,from,next)=>{
  console.log(to)
  // 判断该路由是否需要登录权限
 if(to.matched.some(r=>r.meta.requireAuth)){
   // 通过vuex state获取当前的token是否存在
  if(store.state.token){//已登录
    next()
  }
  else{
    next({
      path:'/login',
      query:{redirect:to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  }
 }
 else{
   next()
 }
})
export default router
