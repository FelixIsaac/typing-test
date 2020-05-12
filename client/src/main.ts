import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/css/mdb.min.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Vue from 'vue';
import VueCookies from 'vue-cookies';
import VueHotKey from 'v-hotkey';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.use(VueHotKey);

new Vue({
  router,
  render: (h: any) => h(App),
}).$mount('#app');
