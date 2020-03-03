import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import feedback from "moyi_feedback";
import iView from "iview";
import "iview/dist/styles/iview.css";
import Bus from "./BUs";
Vue.use(feedback);
Vue.use(iView);

Vue.config.productionTip = false;
Vue.prototype.bus = Bus;

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.bus = this;
  }
}).$mount("#app");
