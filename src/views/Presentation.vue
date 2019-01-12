<template>
  <div id="presentations">
    <v-container fluid grid-list-sm>
      <v-layout :key="index" justify-center row v-for="(item, index) in presentations" wrap>
        <v-flex @click="handleClick(item.url)" xs12>
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
    </v-container>
  </div>
</template>
<script>
import { getRepoContent } from '@/api'
import { b64ToUtf8 } from '@/utils/helper'
import { presentation } from '@/config'

export default {
  data() {
    return {
      page: 1,
      size: 10,
      repoName: presentation.repo,
      filename: presentation.filename,
      presentations: [],
      isProgress: false
    }
  },
  created() {
    this.getPresentation()
  },
  methods: {
    handleClick: function(url) {
      window.open(url, '_blank')
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
    getPresentation: function() {
      // get 'presentation' 'README.md' and parse it
      getRepoContent(this.repoName, this.filename).then(item => {
        let content = b64ToUtf8(item.content)
          .split('***')[1]
          .split('\n')
        for (let i in content) {
          if (content[i]) {
            let tmp = content[i]
              .replace('- [', '')
              .replace('html)', 'html')
              .split('](')
            this.presentations.push({
              title: tmp[0],
              url: tmp[1]
            })
          }
        }
      })
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


