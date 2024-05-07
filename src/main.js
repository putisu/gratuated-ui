import Vue from 'vue'
import App from './App.vue'
import router from './router'
import GratuatedUI from '../packages/index'

Vue.config.productionTip = false
Vue.use(GratuatedUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
