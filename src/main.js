import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HighChatsVue from "highcharts-vue";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(HighChatsVue);

import HighCharts from "highcharts";
import treemap from "highcharts/modules/treemap";
treemap(HighCharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
