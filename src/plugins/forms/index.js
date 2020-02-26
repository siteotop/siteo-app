
//import VeeValidate from 'vee-validate';
import AppForm from './AppForm/index.vue';
import AppConfirm from './AppConfirm.vue';
const pluginName = 'siteo-plugin-forms';

export default {
  name: pluginName,

  install: function (Vue) {
      Vue.component('AppConfirm', AppConfirm);
      Vue.component(pluginName, AppForm);

  }

}
