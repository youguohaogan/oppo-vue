<template>
  <div class="manage">
    <el-row :gutter="24" class="Bcolor" style="padding:0 10px;margin:0px;">
      <el-col :span="0.7">
        <div class="Himg">
          <span>
            <img src="../assets/images/ico-laba.png" />
          </span>
        </div>
      </el-col>
      <el-col :span="23" style="padding:0px">
        <div class="Himg">
          【系统】-审核状态消息
          <span style="padding-left:10px" class="commonColor heads">查看更多</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around" class="revenue">
      <el-col class="day" :span="6">
        <i></i>
        <div>
          <div class="general-detail-item-data">1554</div>
          <div class="general-detail-item-label">昨日流量收入</div>
        </div>
      </el-col>
      <el-col class="week" :span="6">
        <i></i>
        <div>
          <div class="general-detail-item-data">15868</div>
          <div class="general-detail-item-label">本周流量收入</div>
        </div>
      </el-col>
      <el-col class="month" :span="6">
        <i></i>
        <div>
          <div class="general-detail-item-data">1253995</div>
          <div class="general-detail-item-label">本月流量收入</div>
        </div>
      </el-col>
      <el-col class="income">
        总收入：
        <span class="commonColor">1253694</span>
      </el-col>
    </el-row>
    <el-row>
      <div id="chart1" style="width:100%;height:576px;padding-top:40px;"></div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "manage",
  data() {
    return {};
  },
  mounted() {
    this.getEchartData1();
  },
  methods: {
    getEchartData1() {
     let myChart1 = this.$echarts.init(document.getElementById('chart1'));
     myChart1.setOption(this.setOption('全局全部引入')); 

    },
    setOption(title) {
      let option = {
        title: {
          text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['展现量','点击量','点击率','收入'],
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']

        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'展现量',
                smooth:true,
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 350, 230, 210]
            },
            {
                name:'点击量',
                type:'line',
                smooth:true,
                stack: '总量',
                data:[220, 682, 191, 234, 290, 330, 310]
            },
            {
                name:'点击率',
                type:'line',
                smooth:true,
                stack: '总量',
                data:[150, 232, 201, 154, 190, 630, 410]
            },
            {
                name:'收入',
                type:'line',
                smooth:true,
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            }
        ]
      };
      return option;
      }
    }
  }
</script>
<style lang="less" scoped>
@margin-left: 30px;
.manage {
  padding: 10px;
  .Bcolor {
    .el-col {
      border-radius: 2px;
      min-height: 45px;
      .Himg {
        margin-top: 12px;
      }
    }
  }
  .revenue {
    .el-col {
      margin-left: @margin-left;
    }
    margin-top: 50px;
    .el-col > i {
      width: 33px;
      height: 41px;
      display: inline-block;
      float: left;
      margin-right: 7px;
      background: url(../assets/images/icos.png) no-repeat;
    }
    .week > i {
      background-position-x: -35px;
    }
    .month > i {
      background-position-x: -70px;
    }

    .general-detail-item-data {
      font-size: 24px;
      color: #000000;
    }
    .general-detail-item-label {
      font-size: 15px;
      color: #888888;
    }
    .income {
      padding-left: 40%;
      font-size: 24px;
      color: #000000;
      margin-top: 15px;
    }
  }
}
</style>