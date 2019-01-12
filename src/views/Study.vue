<template>
  <div id="articles">
    <v-container fluid grid-list-sm>
      <v-layout :key="index" justify-center row v-for="(item, index) in articles" wrap>
        <v-flex @click="handleClick(item.number)" xs12>
          <a>
            <v-card
              :ripple="{ class: 'primary--text' }"
              class="little-shadow custom-ripple mb-2 post-title-link"
              flat
              v-on:mouseout="removeShadow($event)"
              v-on:mouseover="addShadow($event)"
            >
              <v-card-text class="word">{{ item.title }}</v-card-text>
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
import { study } from '@/config'

export default {
  data() {
    return {
      page: 1,
      size: 9,
      articles: [],
      isProgress: false,
      hasMore: true,
      repoName: study.repo,
      label: study.label
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    handleClick: function(number) {
      this.$router.push('/study/' + number)
    },
    addShadow: function($event) {
      $event.currentTarget.className += ' elevation-3'
    },
    removeShadow: function($event) {
      $event.currentTarget.className = $event.currentTarget.className.replace(
        / elevation-3/g,
        ' '
      )
    },
    loadMore: function() {
      this.getArticles()
    },
    getArticles: function() {
      this.isProgress = true
      getRepoIssues(this.repoName, this.page, this.size, this.label).then(
        articles => {
          this.hasMore = articles.length == this.size ? true : false
          this.articles = this.articles.concat(articles)
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
.little-shadow {
  box-shadow: 0 0px 0px 0px rgba(0,0,0,.2),0 0px 0px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);
}
</style>


