import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  vuetify,
  created() {
    const html = document.documentElement
    html.setAttribute('lang', 'ja')
  },
  render: h => h(App)
}).$mount("#app");
