import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: Layout,
      children: [{
        path: '',
        name: 'about-content',
        component: () => import('./views/About.vue')
      }]
    },
    {
      path: '/article',
      name: 'article',
      component: Layout,
      children: [{
        path: '',
        name: 'article-index',
        component: () => import('./views/Article.vue')
      },{
        path: '/article/:id',
        name: 'article-content',
        component: () => import('./views/Content.vue')
      }]
    },
    {
      path: '/study',
      name: 'study',
      component: Layout,
      children: [{
        path: '',
        name: 'study-index',
        component: () => import('./views/Study.vue')
      },{
        path: '/study/:id',
        name: 'study-content',
        component: () => import('./views/Content.vue')
      }]
    },
    {
      path: '/algorithm',
      name: 'algorithm',
      component: Layout,
      children: [{
        path: '',
        name: 'algorithm-index',
        component: () => import('./views/Algorithm.vue')
      },{
        path: '/algorithm/:id',
        name: 'algorithm-detail',
        component: () => import('./views/Content.vue')
      }]
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: Layout,
      children: [{
        path: '',
        name: 'presentation-content',
        component: () => import('./views/Presentation.vue')
      }]
    },
    {
      path: '/note',
      name: 'note',
      component: Layout,
      children: [{
        path: '',
        name: 'note-index',
        component: () => import('./views/Note.vue')
      },{
        path: '/note/:id',
        name: 'note-content',
        component: () => import('./views/Content.vue')
      }]
    },
    {
      path: '/book',
      name: 'book',
      component: Layout,
      children: [{
        path: '',
        name: 'book-content',
        component: () => import('./views/Book.vue')
      }]
    },
    {
      path: '/friend',
      name: 'friend',
      component: Layout,
      children: [{
        path: '',
        name: 'friend-content',
        component: () => import('./views/Friend.vue')
      }]
    }
  ]
})
