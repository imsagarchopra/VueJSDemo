import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
Vue.use(VueRouter);
const routes=[
  {path:'/', component:Home},
  {path:'/Login', component:Login}
]
const router = new VueRouter({routes})

Vue.config.productionTip = false
Vue.filter('Ucase',function(val){
  return val.toUpperCase()
})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
