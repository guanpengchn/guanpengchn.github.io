<template>
  <v-app id="layout">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      
      <v-list dense >
        <div class="slider" :style="{ transform: 'translateY(' + sliderTranslate + ')' }"></div>
        <template v-for="item in items">
          <!-- common dir -->
          <v-list-tile
            :key="item.text" 
            @click="handleClick(item.path)"
            :ripple="{ class: 'primary--text' }"
            >
            <v-list-tile-content class="content">
              <v-list-tile-title :class="{ active: item.isActive}">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      dark
      app
      fixed
      style="background-color:#1565c0cc;"
    >
      <v-toolbar-title style="width: 300px" class="ml-0">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Aaron's Blog</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon @click="handleClick('https://github.com/guanpengchn')"> -->
        <!-- <v-icon>apps</v-icon> -->
        <a href="https://github.com/guanpengchn" target="_blank" class="github-corner" aria-label="View source on Github">
          <svg class="svg-content" viewBox="0 0 250 250" style="fill:#fff; color:#1565c0cc; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg>
        </a>
      <!-- </v-btn> -->
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { nav } from '@/config'

export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: nav
  }),

  methods: {
    handleClick: function(path) {
      if (path.indexOf("http") != -1) {
        window.open(path, "_blank");
      } else {
        this.$router.push(path);
        for(let item of this.items){
          if(item.path == path){
            item.isActive = true;
          }else{
            item.isActive = false;
          }
        }
      }
    }
  },
  computed: {
    sliderTranslate () {
      const path = this.$route.path
      let index = 0;
      this.items.forEach(function (val,idx) {
        if(path.indexOf(val.path) != -1){
          val.isActive = true;
          index = idx;
        }else{
          val.isActive = false;
        }
      });
      return `${index * 40}px`
    }
  }
};
</script>
<style scoped>
.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
.svg-content{
  height:100%;
}
#layout{
  background-color:#f5f5f5;
}
.slider{
  position: absolute;
  width:100%;
  height:40px;
  border-left: 5px solid rgba(21, 101, 192);
  background-color: #fff;
  transition: transform 0.25s ease-out;
  -webkit-transition: transform 0.25s ease-out;
}
.active{
  color: rgba(21, 101, 192);
  font-weight: bold;
}
.content{
  padding-left:25px;
  font-weight:normal;
  font-size:15px;
}
</style>
