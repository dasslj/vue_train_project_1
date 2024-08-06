<template>
    <div>
        <div id="chart1"></div>
    </div>
</template>

<script setup>
import * as echarts from "echarts"
import {onMounted} from "vue"

const chart1 = echarts.init(document.getElementById("chart1"))

onMounted(() => {
    const option = {
        series:[
        {
            type:"line",
            data:[1,2,3,4,5]
        }
        ],
        xAxis:{
            data:[5,4,3,2,1]
        },
        yAxis:{

        }
    };
    chart1.setOption(option);
})


</script>



<style scoped>
#chart1{
    width: 500px;
    height: 500px;
}
</style>