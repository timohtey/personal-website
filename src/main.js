import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMq from "vue-mq";

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: {
    mobile: 767,
    tablet: 1023,
    laptop: 1200,
    desktop: Infinity
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
