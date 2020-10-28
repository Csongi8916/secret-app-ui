import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Secret from './components/Secret.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const NotFound = { template: '<h1>Not Found!</h1>' }

const routes = [
  { path: '/secret/:id', component: Secret },
  { path: '/', component: Home },
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
