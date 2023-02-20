import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import "./index.css"
import store from './store'
// import './styles/my-styles.scss'

Vue.use(ElementUI);

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')