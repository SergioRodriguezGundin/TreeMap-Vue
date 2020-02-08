import Vue from "vue";
import Vuex from "vuex";

//modules
import companysModule from "./modules/companys";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    companys: companysModule
  }
});
