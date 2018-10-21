<template>
  <div class="article-meta">
    <h1>{{ article.title }}</h1>
    <v-icon small class="pa pl">access_alarm</v-icon>
    <span>{{ article.createdAt }}</span>
    <v-icon small class="pa">comment</v-icon>
    <span>{{ article.comments }}</span>
    <v-icon small class="pa">create</v-icon>
    <span v-for="label of article.labels" :key="label.id" :style="{ color: `#${label.color}`}">{{ label.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'blog-article-meta',
  props: {
    article: { type: Object, required: true },
  }
}
</script>
<style src="../styles/markdown.css"></style>
<style scoped>
.article-meta  {
  font-size: 14px;
  background-color: #fff;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px 0 0 0;
  text-align: center;
}
.article-meta h1{
  padding-bottom:20px;
}
.article-meta span{
  font-size: 14px;
  color: #2e2e2e;
}
.article-meta .pl{
  margin-left: 0px !important;
}
.article-meta .pa {
  margin-right: 0.2em;
  margin-left: 1em;
}
</style>