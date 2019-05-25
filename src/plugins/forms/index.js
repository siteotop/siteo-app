
//import VeeValidate from 'vee-validate';
import AppForm from './AppForm/index.vue';

const pluginName = 'siteo-plugin-forms';

export default {
  name: pluginName,

  install: function (Vue) {
      Vue.component(pluginName, AppForm);
  }

}
