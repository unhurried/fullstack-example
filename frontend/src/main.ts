import Vue from 'vue';
// @ts-ignore
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full';
import { ValidationObserver } from 'vee-validate';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
