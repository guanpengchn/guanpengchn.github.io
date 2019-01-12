<template>
  <div id="comment" :class="{active:isProgress}">
    <div class="baseline comments-word" data-text="添加评论">
      <a :href="url" target="_blank" class="commenter-name-link"><strong>添加评论</strong></a>
    </div>
    <dl v-if="!!comments.length" class="comments">
      <dd v-for="comment of comments" :key="comment.id" class="comment-item">
        <a :href="comment.user.html_url" target="_blank" rel="noopener noreferrer" class="commenter-avatar-link">
          <img :src="comment.user.avatar_url" alt="avatar" class="commenter-avatar">
        </a>
        <div class="comment-header">
          <a :href="comment.user.html_url" target="_blank" rel="noopener noreferrer" class="commenter-name-link">
            <strong>{{ comment.user.login }}</strong>
          </a>
          <span class="comment-created">{{ comment.createdAt }}</span>
        </div>
        <article v-html="comment.body" class="comment-body"></article>
      </dd>
    </dl>
    <!-- <load-more
      :visible="!!comments.length && hasMoreComment"
      :loading="isLoading"
      @load="handleLoadComments">
    </load-more> -->
    <div v-show="!!comments.length && !hasMoreComment" class="baseline" data-text="没有更多评论"></div>
  </div>
</template>

<script>
// import LoadMore from './LoadMore'
import { getRepoIssuesComments } from "@/api"
import { convertComment } from '@/utils/helper'

const paging = { page: 1, size: 30 }
export default {
  name: "article-comment",
  //   components: { LoadMore },
  data() {
    return {
      comments: [],
      //   isLoading: false,
      hasMoreComment: false,
      repoName: 'guanpengchn.github.io',
      url: 'https://github.com/guanpengchn/guanpengchn.github.io/issues/'
    }
  },
  props:{
    isProgress: { type: Boolean, required: true }
  },
  created() {
    this.url += this.$route.params.id
    this.handleLoadComments()
  },
  methods: {
    /* eslint-disable */
    handleLoadComments() {
      //   this.isLoading = true
      getRepoIssuesComments(
        this.repoName,
        this.$route.params.id,
        paging.page,
        paging.size
      ).then(items => {
        if (!items.length) return
        this.comments = [...items.map(convertComment)]
        // this.isLoading = false
      })
    }
  }
}
</script>

<style scoped>
.comments-word{
  display:flex;
  justify-content:center;
  align-items:center;
  padding:0px 45px;
}
.baseline{
  margin-bottom: 30px;
}
.comments {
  padding: 0px 45px 20px 45px;
  background-color: rgba(255, 255, 255, 0.8);
  max-width:980px;
  margin:0 auto;
}
.comment-item {
  position: relative;
  margin: 1em 0 1em 5em;
  border: 1px solid #d9d9d9;
}
.commenter-avatar-link {
  position: absolute;
  left: -5em;
}
.commenter-avatar {
  width: 4em;
  height: 4em;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0.5em 1em;
  border-bottom: 1px solid #d9d9d9;
  font-size: 14px;
  background: #f7f7f7;
}
.comment-header::before {
  content: "";
  position: absolute;
  top: 0.85em;
  left: -0.55em;
  width: 1em;
  height: 1em;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  background: #f7f7f7;
  transform: rotate(-45deg);
}
.commenter-name-link {
  text-decoration: none;
  z-index:10;
  color:black;
}
.commenter-name-link:hover {
  color:#1976d2;
}
.comment-created {
  color: #919191;
}
.comment-body {
  padding: 1em;
  font-size: 15px;
}
.active{
  display: none;
}
</style>