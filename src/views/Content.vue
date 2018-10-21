<template>
    <div id="article">
      <content-header :article="article" :class="{active:isProgress}"></content-header>
      <div id="markdown" v-html="article.body" class="markdown-body" v-marked></div>
      <comment :isProgress="isProgress"></comment>
      <v-layout justify-center>
          <template v-if="isProgress">
            <v-progress-circular
              indeterminate
              color="indigo darken-2"
            ></v-progress-circular>
          </template>
      </v-layout>
    </div>
</template>
<script>
import { getRepoIssue } from '@/api';
import { convertContent } from '@/utils/helper'
import Comment from '@/components/Comment'
import ContentHeader from '@/components/ContentHeader'

export default {
  components: {
    Comment,
    ContentHeader
  },
  data() {
    return {
      article:{},
      comment:{},
      isProgress: false,
      repoName: 'guanpengchn.github.io'
    }
  },
  created(){
    this.getArticles()
  },
  mounted(){
    document.getElementById('layout').style.backgroundColor='white'
  },
  beforeDestroy(){
    document.getElementById('layout').style.backgroundColor='#f5f5f5'
  },
  methods: {
    getArticles: function(){
      this.isProgress = true
      getRepoIssue(this.repoName,this.$route.params.id)
        .then(article => {
          this.article = convertContent(article) 
          this.isProgress = false
        })
    }
  }
};
</script>
<style src="../styles/base.css"></style>
<style src="../styles/atom-one-dark.css"></style>
<style src="../styles/markdown.css"></style>
<style scoped>
.active{
  display: none;
}
</style>
