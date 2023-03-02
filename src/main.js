import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import "./index.css"
import store from './store'
import http from 'axios'
import '../src/api/mock'
// import './styles/my-styles.scss'

Vue.use(ElementUI);
Vue.prototype.$http = http

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')