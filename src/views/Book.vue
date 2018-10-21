<template>
    <div id="book">
        <template v-if="isProgress">
          <v-progress-circular
            indeterminate
            color="indigo darken-2"
          ></v-progress-circular>
        </template>
        <div class="contain" v-show="!isProgress">
          <div style="padding:45px;">
            <h2 style="margin:1em 0 1em;text-align:center;">请大家多购买正版书籍</h2>
          </div>
          <ul class="align">
            <li v-for="(item, index) in books" :key="index">
              <figure class='book'>

                <!-- Front -->

                <ul class='hardcover_front'>
                  <li>
                    <img :src="item.pic_url" @load="imageLoaded" alt="" width="100%" height="100%">
                  </li>
                  <li></li>
                </ul>

                <!-- Pages -->

                <ul class='page'>
                  <li></li>
                  <li>
                    <a class="btn" :href="item.html_url" target="_blank" style="width: 90px;position: absolute;margin-top: 70px;">View</a>
                    <a class="btn" :href="item.download_url" style="width: 90px;">Download</a>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

                <!-- Back -->

                <ul class='hardcover_back'>
                  <li></li>
                  <li></li>
                </ul>
                <ul class='book_spine'>
                  <li></li>
                  <li></li>
                </ul>
              </figure>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
import { getRepoContent} from '@/api'
import { book } from '@/config'

export default {
  data() {
    return {
      books:[],
      isProgress: false,
      imageNum: 0,
      repoName: book.repo
    }
  },
  created(){
    this.getNote()
  },
  methods: {
    /* eslint-disable */
    getNote: function(){
      this.isProgress = true
      getRepoContent(this.repoName)
        .then(books => {
          for(let book of books){
            if(book.name.indexOf('.pdf') != -1){
              this.books.push({
                name: book.name.replace('.pdf',''),
                download_url: book.html_url.replace('blob','raw'),
                pic_url: book.html_url.replace('blob/master','raw/master/cover').replace('pdf','jpg'),
                html_url: book.html_url
              })
            }
          }
        })
    },
    imageLoaded() {
        this.imageNum ++;
        if(this.imageNum == this.books.length){
          this.isProgress = false
        }
    }
  }
};
</script>
<style src="../styles/book.css" scoped></style>
<style scoped>
#book{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
}
.contain{
  background-color:white;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  margin:0px;
  padding: 0px;
}
</style>


