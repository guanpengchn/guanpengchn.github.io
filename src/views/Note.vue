<template>
  <div id="note">
    <v-container fluid grid-list-sm>
      <v-layout justify-start row wrap>
        <v-flex
          :key="index"
          @click="handleClick(item.number)"
          md6
          v-for="(item, index) in articles"
          xs12
        >
          <a>
            <v-card
              :ripple="{ class: 'primary--text' }"
              class="little-shadow custom-ripple ma-1 post-title-link"
              flat
              v-on:mouseout="removeShadow($event)"
              v-on:mouseover="addShadow($event)"
            >
              <v-card-text class="word">{{ item.title }}</v-card-text>
            </v-card>
          </a>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { getRepoIssues } from '@/api'
import { note } from '@/config'

export default {
  data() {
    return {
      page: 1,
      size: 20,
      articles: [],
      isProgress: false,
      repoName: note.repo,
      label: note.label
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    handleClick: function(number) {
      this.$router.push('/note/' + number)
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
          this.articles = this.articles.concat(articles)
          this.isProgress = false
        }
      )
      this.page++
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


