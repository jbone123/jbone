import Vue from 'vue'
import Router from 'vue-router'  // 1.定义路由
//2.引入路由组件
const Home = ()=> import('@/components/home/index.vue')
// import Home from '../components/home/index.vue'
import User from '../components/user/index.vue'
import Movie from '../components/movie/index.vue'
import Casts from '../components/casts/index.vue'
import CastsDetail from '../components/casts/detail/index'
import Directors from '../components/directors/index.vue'
import HomeHeader from '../components/home/header/index.vue'
import UserHeader from '../components/user/header/index.vue'
import MovieHeader from '../components/movie/header/index.vue'
import CastsHeader from '../components/casts/header/index.vue'
import CastsDetailHeader from '../components/casts/detail/header/index'
import CastsDetailFooter from '../components/casts/detail/footer/index'
import DirectorsHeader from '../components/directors/header/index.vue'
import Register from '../components/register/index'
import Login from '../components/login/index'
import Nologing from '../components/user/nologin/index.vue'  
import Loging from '../components/user/loging/index.vue'
import MainFooter  from '../components/mainfooter/index' 

Vue.use(Router)
// 3.定义路由规则 并且常见路由实例 暴露
export default new Router({
  mode: 'hash',
  routes: [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path: '/home',
      // component: Home
      components:{
        header: HomeHeader,
        content: Home,
        footer: MainFooter
      }
    },
    {
      path: '/user',
      component: User,
      components:{
        header: UserHeader,
        content: User,
        footer: MainFooter
      },
      children:[
        {
          path:"",
          redirect: 'nologin'
        },
        {
          path:'nologin',
          component: Nologing
        },
        {
          path: 'loging',
          component: Loging
        }
      ]
    },
    {
      path: '/movie',
      // component: Movie
      components:{
        header: MovieHeader,
        content: Movie,
        footer: MainFooter
      }
    },
    {
      path: '/casts',
      components:{
        header: CastsHeader,
        content: Casts,
        footer: MainFooter
      }
    },
    // {
    //   path: '/castsDetail',
    //   component: CastsDetail
    // },
    {
        path: '/castsDetail/:id',
        name: 'castsDetail', //可以用来传递值---命名路由（给我们的路由起一个名字  ）
        components:{
          header: CastsDetailHeader,
          content: CastsDetail,
          footer: CastsDetailFooter
        },
        props: true, //组件js中添加一个选项props:['id'],那么就采用{{id}}代替{{this.$route.params.id}}
      },
    {
      path: '/directors',
      // component: Directors
      components:{
        header: DirectorsHeader,
        content: Directors,
        footer: MainFooter
      }
    },
    {
      path: '/register',
      components: {
        content: Register
      }
    },
    {
      path: '/login',
      components: {
        content: Login
      }
    }
  ]
})

// 在需要跳转的地方<router-link to="/user">
