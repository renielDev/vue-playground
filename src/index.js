import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Todo from './components/Todo/Todo'
import Item from './components/Product/Item'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  el: "#app",
  template: "<Item/>",
  components: {
    Item
  }
});
