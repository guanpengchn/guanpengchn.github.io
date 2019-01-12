import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

Vue.use(Vuetify, {
  iconfont: 'mdi',
  icons: {
    'product': 'mdi-dropbox',
    'support': 'mdi-lifebuoy',
    'steam': 'mdi-steam-box',
    'pc': 'mdi-desktop-classic',
    'xbox': 'mdi-xbox',
    'playstation': 'mdi-playstation',
    'switch': 'mdi-nintendo-switch'
  },
  theme: {
    primary: '#1867c0',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})