<template>
  <div>
    <titleTop />
    <div class="table">
      <el-row type="flex" style="margin-bottom:8px;">
        <el-col>
            <el-button type="primary" icon="el-icon-plus" class="bcMedia">新增媒体</el-button>
            <a style="margin-left:40px; color:#00925f;">批量删除</a>
        </el-col>
        <el-col >
          <b>联盟状态</b>
          <el-dropdown style="border:1px solid #EBEEF5;padding:2px">
            <span class="el-dropdown-link">
              全部状态
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>审核中</el-dropdown-item>
              <el-dropdown-item>已通过</el-dropdown-item>
              <el-dropdown-item>未通过</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          
        </el-col>
        <el-col><el-input suffix-icon="el-icon-search" v-model="input" placeholder="请输入内容"></el-input></el-col>
      </el-row>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100% "
        class="tableTop"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="媒体名称/ID" ></el-table-column>
        <el-table-column prop="name" label="媒体屏平台" ></el-table-column>
        <el-table-column prop="name" label="接入方式" ></el-table-column>
        <el-table-column prop="address" label="联盟状态" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" label="操作" >
        <template  >
            <el-button
            @click="dialogFormVisible = true"
            size="mini">
            修改</el-button>
            <el-button
            size="mini"
            type="danger">
            删除</el-button>
        </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination background :page-size="10" layout="total, prev, pager, next" :total="1000"></el-pagination>
      </div>
      <el-dialog width="70%" title="修改媒体" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="媒体名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" :label-width="formLabelWidth" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>
    </div>
     
  </div>
</template>

<script>
import{ mapMutations } from 'vuex'
import titleTop from "@/components/titleTop";
export default {
  name: "app",
  components:{
      titleTop
  },
  data() {
    return {
        dialogFormVisible: false,
        input:"",
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  
  methods: {
    
    ...mapMutations(['increment','decrement'])
    // toggleSelection(rows) {
    //   if (rows) {
    //     rows.forEach(row => {
    //       this.$refs.multipleTable.toggleRowSelection(row);
    //     });
    //   } else {
    //     this.$refs.multipleTable.clearSelection();
    //   }
    // },
    // handleSelectionChange(val) {
    //   this.multipleSelection = val;
    // },
    // handleEdit(row) {
    //     this.dialogFormVisible = true;
    //     console.log(21423);
        
    // },
  }
};
</script>
<style  lang="less">
.table {
  padding: 20px;
  .bcMedia {
    background: #32a77e;
    border: none;
  }
  .block {
    float: right;
    padding-top: 10px;
    color: #32a77e;
  }
}
</style>