import './assets/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
const app = createApp(App);
app.use(VueLazyload,{
    loading:require("@/assets/preview3.jpg"),
    error:''
})

app.mount('#app')
