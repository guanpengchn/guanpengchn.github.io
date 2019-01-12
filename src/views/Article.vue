<template>
  <div id="articles">
    <v-container fluid grid-list-sm>
      <v-layout row wrap>
        <v-flex :key="index" md3 sm4 style="padding:10px;" v-for="(item, index) in articles" xs12>
          <a @click="handleClick(item.number)">
            <v-card v-on:mouseout="removeShadow($event)" v-on:mouseover="addShadow($event)">
              <v-img
                :src="item.banner"
                class="grey lighten-2"
                lazy-src="https://raw.githubusercontent.com/guanpengchn/Figure/master/pic-loading.jpeg"
              >
                <v-layout align-center fill-height justify-center ma-0 slot="placeholder">
                  <v-progress-circular color="grey lighten-5" indeterminate></v-progress-circular>
                </v-layout>
              </v-img>
              <v-card-title>
                <div class="main-title">{{ item.title }}</div>
                <div class="summary">{{ item.summary}}</div>
              </v-card-title>
              <v-card-actions class="action">
                <v-icon class="pa pl grey--text" small>access_alarm</v-icon>
                <div class="date">{{ item.createdAt }}</div>
                <v-spacer></v-spacer>
                <v-btn @click="handleClick(item.number)" class="primary--text" flat>Read More</v-btn>
              </v-card-actions>
            </v-card>
          </a>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <template v-if="isProgress">
          <v-progress-circular color="indigo darken-2" indeterminate></v-progress-circular>
        </template>
        <template v-else-if="hasMore">
          <v-btn :ripple="{ class: 'primary--text' }" @click="loadMore()" color="white">加载更多...</v-btn>
        </template>
        <template v-else>
          <v-btn :ripple="{ class: 'primary--text' }" color="white">没有了...</v-btn>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { getRepoIssues } from '@/api'
import { article } from '@/config'
import { convertArticle } from '@/utils/helper'

export default {
  data() {
    return {
      page: 1,
      size: 9,
      articles: [],
      isProgress: false,
      hasMore: true,
      repoName: article.repo,
      label: article.label,
      show: false
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    handleClick: function(number) {
      this.$router.push('/article/' + number)
    },
    addShadow: function($event) {
      $event.currentTarget.className += ' elevation-6'
    },
    removeShadow: function($event) {
      $event.currentTarget.className = $event.currentTarget.className.replace(
        / elevation-6/g,
        ' '
      )
    },
    loadMore: function() {
      this.getArticles()
    },
    /* eslint-disable */
    getArticles: function() {
      this.isProgress = true
      getRepoIssues(this.repoName, this.page, this.size, this.label).then(
        articles => {
          this.hasMore = articles.length == this.size ? true : false
          this.articles = articles.map(element => convertArticle(element))
          this.isProgress = false
          if (this.hasMore) this.page++
        }
      )
    }
  }
}
</script>
<style scoped>
.word {
  font-size: 15px;
  padding: 0px;
  font-weight: normal;
}
a {
  color: black;
}
/* a:hover{
  color:#2196F3;
} */
.post-title-link {
  padding: 12px 30px;
}
.post-title-link:hover {
  border-left: 5px solid rgba(21, 101, 192, 0.8);
  padding: 12px 25px;
}
.summary {
  overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
  color: gray;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.date {
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  line-height: 16px;
}
.action {
  padding: 0 12px 16px 16px;
}
.main-title {
  padding: 0px;
  margin: 0px;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>


