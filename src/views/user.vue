<template>
  <div>我是user页面
    <router-link to="/">
      <el-button>home</el-button>
    </router-link>
    <router-link to="/user">
      <el-button type="primary">user</el-button>
    </router-link>
  </div>
</template>

<script>
export default{
  name:'User-user',
  data(){
    return{}
  },

}

</script>