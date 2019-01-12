<template>
    <div id="loadMore" v-show="visible">
      <v-btn
        color="white"
        :ripple="{ class: 'primary--text' }"
        @click="loadMore()">
        加载更多...
      </v-btn>
    </div>
</template>
<script>
export default {
  props: {
    visible: { type: Boolean, required: true }
  }
}
</script>
<style scoped>
</style>


