import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
