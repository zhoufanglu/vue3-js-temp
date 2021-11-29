import { createApp } from 'vue'
/*import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'*/
import App from './App.vue'
import {router} from './router'
//import store from './store'
console.log(5, router)
createApp(App)
  .use(router)
  /*.use(ElementPlus)*/
  //.use(store)
  .mount('#app')
