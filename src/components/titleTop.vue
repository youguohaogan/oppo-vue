<template>
    <div class="titleTop Bcolor">
        <el-breadcrumb >
			<el-breadcrumb-item class="fz" :to="{ path: '/manage' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item class="fz" v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
    </div>
</template>

<script>
export default {
    name:"app",
    data() {
    return {
    }
  },
  created(){
    
  },
  methods:{ 
      
  }
}
</script>
<style  lang="less">
.titleTop{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    .fz{
        font-size: 16px;
    }
}
</style>