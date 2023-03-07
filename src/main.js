import Vue from 'vue';
import ElementUI, {Message, MessageBox} from 'element-ui';
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
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !=='login'){
    next({name:'login'})
  }else {
    next()
  }
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')