<template>
  <div>
    <div class="mainWindow">
      <el-col class="mainCol">
        <h2>登录</h2>
        <el-row>
          <span>用户名/邮箱：</span>
          <el-input
          v-model="registerInfo.account"
          ></el-input>
        </el-row>

        <el-row>
          <span>密码：</span>
          <el-input
          v-model="registerInfo.password"
          ></el-input>
        </el-row>
      </el-col>
      <el-row class="mainRow">
        <el-button
        @click="accountCheck"
        >登录</el-button>
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
import {reactive, ref, getCurrentInstance} from "vue"
import { useRouter } from "vue-router";
import Store from "../store/index.js"

const router = useRouter()
const store = Store()
console.log(store)

const registerInfo = reactive({
  account:"",
  password:""
})

// 申请服务器的用户信息
const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;

function getAccountMSG(){
  return $axios.get("http://localhost:3000/account")
}

// 用户检查
function accountCheck(){
  getAccountMSG().then((msg)=>{
    if (msg.status == 200){
        for (let i = 0;i < msg.data.length; i++)
        {
          if (msg.data[i].name == registerInfo.account || msg.data[i].email == registerInfo.account){

            if (msg.data[i].password == registerInfo.password){
              alert("登录成功")
              // 跳转到首页
              router.push("/homePage")
            }
            else
            {
              alert("密码错误")
            }
            break;
          }
          else
          {
            alert("该用户或邮箱没有注册")
          }
        }
    }
  })
}



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