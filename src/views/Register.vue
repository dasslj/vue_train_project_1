<template>
  <div>
    <div class="mainWindow">
      <el-col class="mainCol">
        <h2>登录</h2>
        <el-row>
          <span>用户名/邮箱：</span>
          <el-input></el-input>
        </el-row>

        <el-row>
          <span>密码：</span>
          <el-input></el-input>
        </el-row>
      </el-col>
      <el-row class="mainRow">
        <el-button>登录</el-button>
        <span style="width: 159px"></span>
        <el-button>取消</el-button>
      </el-row>

      <router-link
      to="/login"
      >
        没有账号？来注册吧
      </router-link>
    </div>
  </div>
</template>
  
<script setup>
// import {reactive, ref} from "vue"



</script>
  
<style scoped>
.mainRow {
  width: 300px;
  margin: 10px auto;
}

.mainCol {
  height: 300px;
  width: 300px;
  margin: 10px auto;
}

.mainWindow {
  width: 500px;
  height: 400px;
  margin: 300px auto;
  border-radius: 7px;
  box-shadow: black 0px 0px 10px;
}
</style>