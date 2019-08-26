import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./modules/moduleA"
import moduleB from "./modules/moduleB"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    moduleA,
    moduleB
  }
});
