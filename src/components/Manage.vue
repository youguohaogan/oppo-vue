<template>
  <div class="Manage">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#47b488"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-col :xs="4" :sm="8" :md="12" :lg="16" :xl="18">
        <div class="logo-area"></div>
      </el-col>
      <el-menu-item index="1" style="font-size: 16px;" >个人中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title" style="font-size: 16px;" >消息中心</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" style="font-size: 16px;" >帮助</el-menu-item>
      <el-menu-item index="4" style="font-size: 16px;">
        <a target="_blank">媒体管理</a>
      </el-menu-item>
    </el-menu>
    <el-row style="height: 100%;">
      <el-col :span="3" style="height: 100%; border-right:1px solid #EBEEF5 ">
        <el-menu style="height: 100%;" theme="dark" router active-text-color="#00925f">
          <el-menu-item index="manage" id="fontZ">
            <i class="el-icon-menu"></i>首页
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title" style="color:red">
              <i class="el-icon-document"></i> 媒体管理
            </template>
            <el-menu-item index="app" >媒体列表</el-menu-item>
            <el-menu-item index="shopList">广告位管理</el-menu-item>
            <el-menu-item index="foodList">流量策略管理</el-menu-item>
            <el-menu-item index="orderList">投放限制</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-plus"></i>工具中心
            </template>
            <el-menu-item index="sdk">SDK下载</el-menu-item>
            <el-menu-item index="js">JS接入文档</el-menu-item>
            <el-menu-item index="xxx">广告预览</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>报告
            </template>
            <el-menu-item index="visitor">整体报告</el-menu-item>
            <el-menu-item index="viww">媒体报告</el-menu-item>
            <el-menu-item index="vxxxx">广告位报告</el-menu-item>
          </el-submenu>
          <!-- <el-submenu index="5">
            <template slot="title" >
              <i class="el-icon-edit"></i>编辑
            </template>
            <el-menu-item index="vueEdit">文本编辑</el-menu-item>
          </el-submenu>-->
          <el-submenu index="5">
            <template slot="title" id="fontZ">
              <i class="el-icon-setting"></i>账号设置
            </template>
            <el-menu-item index="adminSet">账号信息</el-menu-item>
            <el-menu-item index="adminSetw">财务管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="21" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "manage",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    fudatas(){
      this.$router.push({
        name:'aap',
        params:{
          user:"ooo",
          id:"123"
          }})
    },
    getTasks() {
      this.$axios
        .post("/union/app/Q/list", { page: 1, rows: 10 })
        .then(res => {
          this.doneTaskList = res.data;
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>
<style lang="less" >
.Manage {
  width: 100%;
  height: 100%;
  .logo-area {
    float: left;
    margin-left: 40px;
    width: 221px;
    height: 20px;
    background: url(../assets/images/logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 20px;
  }
  .headTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }
}
</style> 

