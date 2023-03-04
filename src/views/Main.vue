<template>
  <div>
    <el-container style="height: 100%">
      <el-aside width="auto">
        <common-aside>我在这里哦</common-aside>
      </el-aside>
      <el-container>
        <el-header style="background-color: rgb(84, 92, 100); color: white " >
          <common-header></common-header>
        </el-header>
<!--        <common-tag>-->
<!--        </common-tag>-->
        <el-main  overflow-y: scroll>  <router-view></router-view> </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import commonAside from "@/views/commonAside.vue";
import commonHeader from "@/views/commonHeader.vue";
// import CommonTag from "@/views/commonTag.vue";


export default {
  name: 'Main-main',
  components:{
    // CommonTag,
    commonAside,
    commonHeader,


  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>






.el-header {
  color: darkgray;
  position: relative;
  width: 100%;
  height: 60px;
}
.el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}
.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
}
</style>