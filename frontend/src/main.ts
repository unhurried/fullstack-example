import Vue from 'vue';
// @ts-ignore
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full';
import { ValidationObserver } from 'vee-validate';
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
library.add(faUserCircle, faSignOutAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.errorHandler = (err, vm, info) => {
  // Handle 401 Unauthorized error response from axios.
  const { response } = err as any;
  if (response && response.status === 401) {
    vm.$router.push({ path: '/login' });
  }
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
