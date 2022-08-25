import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";

import registerPlugins from "./plugins/index";
Vue.config.productionTip = false;
Vue.use(registerPlugins);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
