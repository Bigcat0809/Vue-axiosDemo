// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import store from './store/store'
import axios from './constant/http'
 /* 导入样式 */
 import '../node_modules/vue-material/dist/vue-material.css';
// 使用
Vue.use(VueMaterial)
Vue.config.productionTip = false
// 配置主题 -- 配置默认主题
Vue.material.registerTheme('default',{
  primary: 'blue',
  accent: 'red',
  background: 'white',
})

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;
// 可配置多个主题，比如夜间模式主题，比如其他不同色泽样式，等等，格式大概是下面这样
// 具体的设置参考官方文档就行了
// Vue.material.registerTheme('主题名称',{
//   相关的属性设置....
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  // template: '<App/>',
  // components: { App }
  render:h=>h(App)
}).$mount('#app')
