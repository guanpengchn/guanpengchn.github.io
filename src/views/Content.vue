<template>
  <div id="article">
    <content-header :article="article" :class="{active:isProgress}"></content-header>
    <!-- <toc></toc> -->
    <!-- <button @click="jump()">dfaf</button> -->
    <div class="markdown-body" id="markdown" v-html="article.body" v-marked></div>
    <comment :isProgress="isProgress"></comment>
    <v-layout justify-center>
      <template v-if="isProgress">
        <v-progress-circular color="indigo darken-2" indeterminate></v-progress-circular>
      </template>
    </v-layout>
  </div>
</template>
<script>
import { getRepoIssue } from '@/api'
import { convertContent } from '@/utils/helper'
import Comment from '@/components/Comment'
import ContentHeader from '@/components/ContentHeader'
// import Toc from '@/components/Toc'

export default {
  components: {
    Comment,
    ContentHeader
  },
  data() {
    return {
      article: {},
      comment: {},
      isProgress: false,
      repoName: 'guanpengchn.github.io'
    }
  },
  created() {
    this.getArticles()
  },
  // mounted(){
  //   document.getElementById('app').style.backgroundColor='white'
  // },
  // beforeDestroy(){
  //   document.getElementById('app').style.backgroundColor='#f5f5f5'
  // },
  methods: {
    jump: function() {
      let jump = document.getElementById('DO（Domain Object）领域对象')
      // 获取需要滚动的距离
      let total = jump.offsetTop
      // Chrome
      document.body.scrollTop = total
      // Firefox
      document.documentElement.scrollTop = total
      // Safari
      window.pageYOffset = total
    },
    getArticles: function() {
      this.isProgress = true
      getRepoIssue(this.repoName, this.$route.params.id).then(article => {
        this.article = convertContent(article)
        this.isProgress = false
      })
    }
  }
}
</script>
<style src="../styles/base.css"></style>
<style src="../styles/atom-one-dark.css"></style>
<style src="../styles/markdown.css"></style>
<style scoped>
#article {
  max-width: 1185px;
  margin: auto;
  width: 100%;
}
.active {
  display: none;
}
</style>
