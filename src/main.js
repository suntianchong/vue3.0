// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import il8n from './il8n'
import api from './http'
import global from '@/utils/global'

Vue.use(api) //注册使用api模块
Vue.config.productionTip = false
Vue.use(ElementUI) //注册使用element
Vue.prototype.global=global //挂载全局配置模块

new Vue({
  el: '#app',
  router,
  il8n,
  components: { App },
  template: '<App/>'
})
