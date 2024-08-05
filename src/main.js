import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import axios from "axios"
import vueAxios from "vue-axios"


const app = createApp(App)


app.use(router)

app.use(ElementPlus)

app.use(vueAxios, axios)

app.config.globalProperties.$axios = axios

axios.interceptors.request.use(function (config) {
    if (config.data) {
        config.data.time = Date.now()
    }
    return config
}, function (err) {
    console.log(err)
})


app.mount('#app')