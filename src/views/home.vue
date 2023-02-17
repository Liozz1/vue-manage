<template>
<!--  <div>我是home页面-->
<!--    <el-button type="primary">主要按钮</el-button>-->
<!--    <router-link to="/">-->
<!--      <el-button>home</el-button>-->
<!--    </router-link>-->
<!--    <router-link to="/user">-->
<!--      <el-button type="primary">user</el-button>-->
<!--    </router-link>-->
<!--  </div>-->
  <div>
    <el-container style="height: 100%">
      <el-aside width="auto">
        <common-aside>我在这里哦</common-aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import commonAside from "@/views/commonAside.vue";
export default {
  name: 'Home-home',
  components:{
    commonAside
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.el-header{
  background-color: #333;
}
.el-main{
  padding-top: 0;
}
</style>