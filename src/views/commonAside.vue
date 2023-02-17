<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path"> <!--key可以使虚拟dom更快的查找到应该修改的节点-->
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu index="1">


      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>

        <el-menu-item index="1-1">选项1</el-menu-item>

      </el-menu-item-group>


    </el-submenu>



  </el-menu>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menu:[
        {
          path:'/',
          name:'home',
          label:'首页',
          icon:'s-home',
          url:'Home/Home'
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

    },
  computed:{
    noChildren(){
      return this.menu.filter(item => !item.children)  //    filter；过滤符合条件的数据，会返回
    }, hasChildren(){
      return this.menu.filter(item => item.children)
    }
  }
}
</script>