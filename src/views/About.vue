<template>
  <div class="about">
    <v-container class="container">
      <v-layout align-center justify-center row>
        <v-card class="card">
          <h3 class="stress">基本信息</h3>
          <hr>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">Wechat</p>
            <p class="Grid-cell">aaron875499765</p>
          </div>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">Email</p>
            <p class="Grid-cell">875499765@qq.com</p>
          </div>

          <h3 class="stress">教育经历</h3>
          <hr>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">2016.09 - 2019.07</p>
            <p class="Grid-cell u-1ofn">系统开发、区块链技术</p>
            <p class="Grid-cell u-1ofn">硕士</p>
            <p class="Grid-cell">中科院计算技术研究所</p>
          </div>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">2012.09 - 2016.07</p>
            <p class="Grid-cell u-1ofn">Web开发技术</p>
            <p class="Grid-cell u-1ofn">学士</p>
            <p class="Grid-cell">大连理工大学软件学院</p>
          </div>
          <h3 class="stress">个人博客</h3>
          <hr>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">
              <a href="https://blog.csdn.net/grape875499765" target="_blank">CSDN</a>
            </p>
            <p class="Grid-cell">阅读量 20W 左右的 CSDN 博客，早期笔记放于此处</p>
          </div>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">
              <a href="https://guanpengchn.github.io/" target="_blank">Aaron's Blog</a>
            </p>
            <p class="Grid-cell">部署于 GitHub Pages，通过issues发布博客，包含精选文章、笔记、slides和算法题</p>
          </div>
          <div class="Grid">
            <p class="Grid-cell u-1ofn">
              <a href="https://github.com/guanpengchn" target="_blank">GitHub</a>
            </p>
            <p class="Grid-cell">
              包含博客
              <a
                href="https://github.com/guanpengchn/guanpengchn.github.io/tree/dev"
                target="_blank"
              >源码</a>
              ，个人 slides 库
              <a
                href="https://github.com/guanpengchn/presentation"
                target="_blank"
              >presentation</a>
              ，高清电子书
              <a
                href="https://github.com/guanpengchn/awesome-books"
                target="_blank"
              >awesome-books</a>
              等
            </p>
          </div>
          <h3 class="stress">专业技能</h3>
          <hr>
          <p>• 熟练使用 Java / JavaScript，熟悉语言特性，有较多项目经验</p>
          <p>• 熟练使用 Git，熟悉团队协作流程，有开源社区交流、Linux 运维和部署经验</p>
          <p>• 熟悉计算机网络，算法与数据结构等基础，英语四六级和日语 N2 通过</p>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  padding: 20px 40px 40px 40px;
}
.stress {
  color: #3692d9;
  font-weight: 500;
  margin-top: 10px;
}
h2 {
  font-size: 36px;
  line-height: 60px;
}
h3 {
  line-height: 36px;
}
p {
  font-size: 15px;
  margin: 0px;
  line-height: 30px;
}
.Grid {
  display: flex;
  flex-wrap: wrap;
}
.Grid-cell {
  flex: 1;
}
.Grid-cell.u-1ofn {
  flex: 0 0 20%;
}
@media only screen and (max-width: 720px) {
  p {
    font-size: 14px;
  }
  .container {
    padding: 0px;
  }
  .card {
    width: 100%;
    padding: 10px 30px 30px 30px;
  }
  .Grid-cell {
    flex: auto;
  }
  .Grid-cell.u-1ofn {
    flex: 0 0 50%;
  }
}
</style>

