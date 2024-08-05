<template>
    <div>
  
      <div class="mainWindow">
        
          <el-col class="mainCol">

            <h2>注册</h2>
            <el-row>
                
            </el-row>
            <el-row>
                <span>邮箱：</span>
                <el-input></el-input>
            </el-row>
            <el-row>
                <span>密码：</span>
                <el-input></el-input>
            </el-row>
            <el-row>
                <span>确认密码：</span>
                <el-input></el-input>
            </el-row>


          </el-col>
      </div>
  
    </div>
</template>
  
<script setup>
  
</script>
  
<style scoped>

.mainCol el-input{
    width: 70px;
}

.mainCol{
    height: 300px;
    width: 300px;
    margin: 10px auto;
}
  
.mainWindow{
    width: 500px;
    height: 400px;
    /* border: 1px red solid; */
    margin: 300px auto;
    border-radius: 7px;
    box-shadow: black 0px 0px 10px;
        
  
}
  
</style>