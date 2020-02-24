import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './components/VueWebComponent';

// Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

const CustomElement = wrap(Vue, VueWebComponent);

window.customElements.define('vue-web-comp-el', CustomElement);