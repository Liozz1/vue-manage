<template>
  <div>

<!--    <router-link to="/">-->
<!--      <el-button>home</el-button>-->
<!--    </router-link>-->
<!--    <router-link to="/Main">-->
<!--      <el-button type="primary">user</el-button>-->
<!--    </router-link>-->
    <el-container style="height: 100%">
      <el-aside width="auto">
        <common-aside>我在这里哦</common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <el-main>  <router-view></router-view> </el-main>
      </el-container>
    </el-container>
  </div>




</template>

<script>
import commonAside from "@/views/commonAside.vue";
import commonHeader from "@/views/commonHeader.vue";
import indexh from "@/views/home/indexh.vue";

export default {
  name: 'Main-main',
  components:{
    commonAside,
    commonHeader,
    indexh,

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