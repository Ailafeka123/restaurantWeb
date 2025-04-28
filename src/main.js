import './assets/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
const app = createApp(App);
import preview3 from "@/assets/preview3.jpg";
app.use(VueLazyload,{
    loading:preview3,
    error:''
})

app.mount('#app')
