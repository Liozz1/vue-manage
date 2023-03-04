<template>

  <el-container style="height: 100%">
    <h1>这里是页面一</h1>
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main  overflow-y: scroll>  <router-view></router-view> </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default{
  name:'One-one',
  data(){
    return{}
  },

}

</script>
<style lang="scss" rel="stylesheet/scss" scoped>





.el-header {
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
