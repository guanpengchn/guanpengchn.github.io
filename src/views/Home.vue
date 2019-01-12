<template>
  <div class="home">
    <h3 style="color:rgba(21, 101, 192, 0.8);">Do fun. Be fun.</h3>
    <hr>
    <v-btn @click="handleClick('/article')" class="btn">Blog</v-btn>
    <v-btn @click="handleClick('https://github.com/guanpengchn')" class="btn">GitHub</v-btn>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    handleClick: function(url) {
      if (url.indexOf('http') != -1) {
        window.open(url, '_blank')
      } else {
        this.$router.push(url)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  padding: 0;
}
.btn {
  background-color: rgba(21, 101, 192, 0.8) !important;
  color: white;
  text-transform: none;
}
hr {
  width: 100%;
  background-color: rgba(21, 101, 192, 0.8);
  height: 3px;
  margin: 20px;
}
</style>
