
<template>
  <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

  </el-menu>
</template>
<style lang="scss" scoped>
.aside{
  height: 100vh;
}
.el-menu{
     height: 100%;
  border:none;
  h3{
    color:#fff;
    text-align: center;
    line-height: 48px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {

      menu:[]


    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      console.log(item.name)
      this.$router.push({
        name:item.name
      })
      this.$store.commit('selectMenu',item)
    }

    },
  computed:{
    noChildren(){
      return this.asyncMenu.filter(item => !item.children)  //    filter；过滤符合条件的数据，会返回
    }, hasChildren(){
      return this.asyncMenu.filter(item => item.children)[0].children
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    },
    asyncMenu(){
      return this.$store.state.tab.menu
    }
  }
}
</script>
