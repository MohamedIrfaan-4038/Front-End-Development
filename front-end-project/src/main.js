import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "./plugins/bootStrap";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  BootstrapVue,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
