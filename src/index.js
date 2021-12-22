import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'

// 导入全局配置
// import globalConfig from './config/global.config'

const app = createApp(App)

// 全局注册组件 - 递归引用找不到问题解决
import RenderMenuItems from '@/components/Layout/Asider/AsiderMenu/vue/components/renderMenuItems.vue'
app.component('RenderMenuItems', RenderMenuItems)

app.use(store).use(router).mount('#app')
