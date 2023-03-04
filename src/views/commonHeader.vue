<template>
  <header>
    <div class="l-content">
      <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"> </el-button>
<!--      <h3 style="color: aliceblue">首页</h3>-->
      <el-breadcrumb   separator="/" >
        <el-breadcrumb-item  style="color: white" v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown  trigger="click" size="mini">
      <span>

          <img src="../assets/user.png" class="user" alt="">

      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
import {mapState} from "vuex";

export default {
  name:'commonHeader',
  data(){
    return{
      userImg:require('../assets/user.png')
    }
  },
  methods:{
    handleMenu(){

      this.$store.commit('collapseMenu')
    }
  },
  computed:{
    ...mapState({
      tags : state => state.tab.tabsList
    })
  }
}
</script>

<style lang="scss" scoped>
header{
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;

  .el-button {
    margin-right: 20px;
  }
}
  .r-content{
    .user{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

               </style>