<template>
    <div>
  
      <div class="mainWindow">
        
          <el-col class="mainCol">

            <h2>注册</h2>
            <el-row>
                <span>用户名：</span>
                <el-input v-model="form.name"></el-input>
            </el-row>
            <el-row>
                <span>邮箱：</span>
                <el-input 
                v-model="emailCheck"
                @change="emailCheckFunc"
                ></el-input>
            </el-row>
            <el-row>
                <span>密码：</span>
                <el-input 
                @change="password1CheckFunc"
                v-model="passwordCheck.password1"
                ></el-input>
            </el-row>
            <el-row>
                <span>确认密码：</span>
                <el-input 
                v-model="passwordCheck.password2"
                @change="password2CheckFunc"
                ></el-input>
            </el-row>
            <p>{{ promptMsg }}</p>

          </el-col>
        <el-row  class="mainRow">
            <el-button @click="submit">提交</el-button>
            <span style="width: 159px;"></span>
            <el-button>取消</el-button>
        </el-row>
        <router-link
      to="/register"
      >
      已有账号？请登录吧
      </router-link>

      </div>
    </div>
</template>
  
<script setup>
import {reactive, ref, getCurrentInstance} from "vue"
import { useRouter } from "vue-router";

const router = useRouter()

const passwordCheck = reactive({
    password1:"",
    password2:""
})

const form = reactive({
    name:"",
    email:"",
    password:""
})

const promptMsg = ref("")
const emailCheck = ref("")
const password1 = ref("")
const currentInstance = getCurrentInstance();
const { $axios } = currentInstance.appContext.config.globalProperties;

// 上传用户数据
function postDatatoServer(data){
    return $axios.post("http://localhost:3000/account", data)
}

// 获取用户数据


function submit(){
    if (form.name && form.email && form.password){
        promptMsg.value = ""
        alert("注册成功")

        // 上传数据
        let message = {
            id:""+Date.now(),
            name:form.name,
            email:form.email,
            password:form.password
        }

        postDatatoServer(message)


        // 跳转到登录页面
        router.push("/register")
    }
    else
    {
        promptMsg.value = "请将必选项，按规定填上"
    }
}

function emailCheckFunc(){
    var email = emailCheck.value;
	var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	if(reg.test(email))
    {
        form.email = email
		promptMsg.value = ""
	}
    else
    {
		promptMsg.value = "邮箱格式不正确"
    }
}

function password1CheckFunc(){
    // 密码长度至少要有4个字符

    if (password1.value.length >= 4){
        promptMsg.value = ""
        passwordCheck.password1 = password1.value

    }
    else {
        promptMsg.value = "密码长度至少要有4个字符"
    }

}

function password2CheckFunc(){
    if (passwordCheck.password1 == passwordCheck.password2)
    {
        form.password = passwordCheck.password1
        promptMsg.value = ""
    }
    else
    {
        promptMsg.value = "两个密码要一样"
    }
}
  
</script>
  
<style scoped>
.mainRow{
    width: 300px;
    margin: 10px auto;
}

.mainCol{
    height: 300px;
    width: 300px;
    margin: 10px auto;
}
  
.mainWindow{
    width: 500px;
    height: 400px;
    margin: 300px auto;
    border-radius: 7px;
    box-shadow: black 0px 0px 10px;
        
  
}
  
</style>