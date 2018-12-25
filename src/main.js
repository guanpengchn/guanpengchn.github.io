import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import VApp from 'vuetify/es5/components/VApp'
import Vuetify from 'vuetify/es5/components/Vuetify'
import transitions from 'vuetify/es5/components/transitions'
import directives from 'vuetify/es5/directives'
import App from './App.vue'
import router from './router'
import store from './store'
import Marked from './utils/marked.js'

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.config.productionTip = false
Vue.use(Marked)
Vue.use(Vuetify, {
  components: {
     VApp,
     transitions
  },
  directives
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
