<template>
  <div>我是home页面
    <el-button type="primary">主要按钮</el-button>
    <router-link to="/">
      <el-button>home</el-button>
    </router-link>
    <router-link to="/user">
      <el-button type="primary">user</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home-home',
  data() {
    return {}
  },

}

</script>