import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@src/router'
import App from '@components/app'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
