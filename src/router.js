import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        title: 'Aaron.blog'
      }
    },
    {
      path: '/about',
      component: Layout,
      children: [{
        path: '',
        name: 'about-content',
        component: () => import('./views/About.vue'),
        meta: {
          title: '关于我'
        }
      }]
    },
    {
      path: '/article',
      component: Layout,
      children: [{
        path: '',
        name: 'article-index',
        component: () => import('./views/Article.vue'),
        meta: {
          title: '文章列表'
        }
      },{
        path: '/article/:id',
        name: 'article-content',
        component: () => import('./views/Content.vue')
      }]
    },
    {
      path: '/study',
      component: Layout,
      children: [{
        path: '',
        name: 'study-index',
        component: () => import('./views/Study.vue'),
        meta: {
          title: '学习笔记'
        }
      },{
        path: '/study/:id',
        name: 'study-content',
        component: () => import('./views/Content.vue')
      }]
    },
    {
      path: '/algorithm',
      component: Layout,
      children: [{
        path: '',
        name: 'algorithm-index',
        component: () => import('./views/Algorithm.vue'),
        meta: {
          title: '算法练习'
        }
      },{
        path: '/algorithm/:id',
        name: 'algorithm-detail',
        component: () => import('./views/Content.vue')
      }]
    },
    {
      path: '/presentation',
      component: Layout,
      children: [{
        path: '',
        name: 'presentation-content',
        component: () => import('./views/Presentation.vue'),
        meta: {
          title: '演示列表'
        }
      }]
    },
    {
      path: '/note',
      component: Layout,
      children: [{
        path: '',
        name: 'note-index',
        component: () => import('./views/Note.vue'),
        meta: {
          title: '收藏列表'
        }
      },{
        path: '/note/:id',
        name: 'note-content',
        component: () => import('./views/Content.vue')
      }]
    },
    {
      path: '/friend',
      component: Layout,
      children: [{
        path: '',
        name: 'friend-content',
        component: () => import('./views/Friend.vue'),
        meta: {
          title: '友情链接'
        }
      }]
    }
  ]
})
