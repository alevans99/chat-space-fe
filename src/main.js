import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import newSocket from './socket/new-socket'

Vue.config.productionTip = false
Vue.prototype.$socket = newSocket

new Vue({
  store,
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
