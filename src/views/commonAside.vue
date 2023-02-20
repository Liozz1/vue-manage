<template>
  <div class="aside" >
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <h3>后勤物料管理系统</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path"> <!--key可以使虚拟dom更快的查找到应该修改的节点-->
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu  v-for="item in hasChildren" :index="item.path" :key="item.path">


      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem,subIndex) in item.children"  :key="subItem.path">

        <el-menu-item :index="subIndex">{{subItem.label}}</el-menu-item>

      </el-menu-item-group>


    </el-submenu>



  </el-menu>
  </div>
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

      menu:[
        {
          path:'/',
          name:'home',
          label:'首页',
          icon:'s-home',
          url:'Main-main'
        },
        {
          path:  '/mall',
          name:'mall',
          label: '物资管理',
          icon: 'video-play',
          url:'MallManage/MallManage'

        },{
          path:  '/user',
          name:'user',
          label: '员工管理',
          icon: 'user',
          url:'UserManage/UserManage'

        },
        {
          label:'其他',
          icon: 'location',
          children:[
            {
              path:'page1',
              name:'page1',
              label:'页面1',
              icon:'setting',
              url:'Other/PageOne',

            },{ path:'page2',
              name:'page2',
              label:'页面2',
              icon:'setting',
              url:'Other/PageTwo',

            }
          ]
        }
      ]
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
      this.$router.push({
        name:item.name
      })
    }

    },
  computed:{
    noChildren(){
      return this.menu.filter(item => !item.children)  //    filter；过滤符合条件的数据，会返回
    }, hasChildren(){
      return this.menu.filter(item => item.children)[0].children
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>
