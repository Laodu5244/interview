import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/demo',
    // 路由独享守卫
    beforeEnter:(to,from,next)=>{
      let user = localStorage.getItem('user')
      if(user === 'admin'){
        next()
      }else{
        next('/')
      }
    },
    component: () => import('@/views/Demo.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

// 全局前置守卫
router.beforeEach((to,from,next)=>{
  next()
})

// 全局解析守卫
router.beforeResolve((to,from,next)=>{
  next()
})

// 全局后置钩子(不接受next函数,也不会改变导航本身)
router.afterEach((to,from,failure)=>{
  // console.log(!failure)
})

export default router
