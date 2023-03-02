<template>


  <div class="home">

    <div class="boxOne">
      <el-card shadow="hover" class="card">
        <div class="user">
          <img src="../../assets/user.png" class="userImg"/>
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>

        </div>
        <div class="login-info">
          <p>上次登陆时间：<span>2022-9-17</span></p>
          <p>上次登陆地点：<span>北京</span></p>
        </div>
      </el-card>
      <div class="labelBox">
        <div v-for="item in countData" :key="item.name" :body-style="{display: 'flex',padding:0}">
          <div class="detail">
            <i :class="`el-icon-${item.icon} icon` " :style="{background:item.color}"></i>
            <div>
              <p class="num">{{ item.value }}</p>
              <p class="txt"> {{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-card style="margin-top: 20px;height: 460px;width: 385px">
      <el-table :data="tableData">
        <el-table-column v-for="(val,index) in tableLabel" :key="index" :prop="index" :label="val">

        </el-table-column>
      </el-table>
    </el-card>
    <el-card style="height: 280px;">
      <!--      <div style="height: 280px" ref="echarts"></div>-->
      <echart :chartData="echartData.order" style="height: 280px"/>
    </el-card>
    <div class="graph">
      <el-card style="height: 260px">
<!--        <div style="height: 240px" ref="userEcharts"></div>-->
        <echart :chartData="echartData.user" style="height: 240px"/>
      </el-card>
<!--      <el-card style="height: 260px">-->
<!--        &lt;!&ndash;        <div style="height: 240px" ref="videoEcharts"></div>&ndash;&gt;-->
<!--        <echart :chartData="echartData.video" :isAxisChart="false" style="height: 240px"/>-->
<!--      </el-card>-->
    </div>


  </div>


</template>

<script>
import {getData} from '../../api/data'
// import * as echarts from 'echarts';
import Echart from '../../components/Echarts.vue'

export default {
  components: {
    Echart
  },
  name: 'Main-main',
  data() {
    return {
      tableData: [],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {

          series: []
        }
      },
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买',
      }
    }
  },
  mounted() {
    getData().then(res => {
      console.log("zheshi res", res)
      const {code, data} = res.data
      if (code === 20000) {
        this.tableData = data.tableData
        const order = data.orderData
        const xData = order.data
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach(key => {
              series.push({
                name: key,
                data: order.data.map(item => item[key]),
                type: 'line'
              })

            }
        )

        this.echartData.order.xData = xData;
        this.echartData.order.series = series;

        this.echartData.user.xData = data.userData.map(item => item.date);
        this.echartData.user.series = [
          {
            name: '新增用户',
            data: data.userData.map(item => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: data.userData.map(item => item.active),
            type: 'bar'
          }
        ];
        console.log("zheshi ed", this.echartData)
      }
    })
  }


}

</script>

<style lang="scss" scoped>
.userImg {
  width: 80px;
  height: 80px;
}


.card {
  width: 30%;
}

.num {
  font-size: 35px;
}

.txt {
  font-size: 10px;
  color: darkgray;
}

.detail {
  display: flex;
  flex: 1;
  height: 70px;
  width: 250px;
  box-shadow: 0px 0px 5px lightgray;
  border-radius: 10px;
  margin-right: 20px;
}

.icon {
  display: flex;
  width: 70px;
  border-radius: 10px;

  font-size: 20px;
  color: white;
  justify-content: center;
  align-items: center;
}

.boxOne {
  display: flex;

}

.labelBox {
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin-left: 20px;
}

.card {
  width: 385px;
}

</style>
